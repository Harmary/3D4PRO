import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { MailService } from '../../../mail/mail.service';
import { Modeler } from 'src/typeorm/modeler.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Modeler) private readonly modelerRepository: Repository<Modeler>,
    private jwtService: JwtService,
    private mailService: MailService,
  ) { }

  async validateUser(login: string, password: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { login: login } });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const authUser = await this.userRepository.findOne({ where: { login: user.login } });
    const isMatch = await bcrypt.compare(user.password, authUser.password);
    if (isMatch) {
      return await this.returnTokenWithRole(authUser, user);
    } else {
      throw new HttpException('Password is wrong', HttpStatus.UNAUTHORIZED);
    }
  }

  async returnTokenWithRole(authUser: User, user: any) {
    const modeler = await this.modelerRepository.findOne({ where: { user_guid: authUser.guid } });
    let role;
    if (user.login === 'admin') {
      role = 'admin'
    } else if (modeler !== null) {
      role = 'modeler'
    } else {
      role = 'user'
    }
    const payload = {
      login: user.login,
      sub: authUser.guid,
      role: role,
    };
    return {
      access_token: this.jwtService.sign(payload),
      guid: authUser.guid
    };
  }

  
  async registerUser(
    user: CreateUserDto,
    isHasToken: boolean
  ): Promise<{ user: User; token?: string }> {
    const existingUser = await this.userRepository.findOne({ where: { login: user.login } });
    if (!!existingUser) {
      throw new HttpException('User with this login is exist', HttpStatus.UNAUTHORIZED);
    }
    if (isHasToken) {
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(user.password, saltOrRounds);
      const savedUser = await this.userRepository.save({ ...user, password: hash });
      const modeler = new Modeler();
      modeler.user_guid = user.guid;
      modeler.account = 0;
      await this.modelerRepository.save(modeler);
      return { user: savedUser }
    } else {
      const token = this.jwtService.sign({
        login: user.login,
        sub: user.guid,
        role: 'user',
      });
      const savedUser = await this.userRepository.save(user);
      return { user: savedUser, token };
    }
  }

  async registerLinkModeler(email: string, guid: string) {
    const payload = { login: email, sub: guid, role: 'modeler' };
    const token = this.jwtService.sign(payload);
    await this.mailService.sendUserConfirmation(email, token);
  }
}
