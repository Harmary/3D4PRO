import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { MailService } from '../../../mail/mail.service';
import { Modeler } from 'src/typeorm/modeler.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Modeler) private readonly modelerRepository: Repository<Modeler>,
    private jwtService: JwtService,
    private mailService: MailService,
  ) {}

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
    const payload = {
      login: user.login,
      sub: authUser.guid,
      role:
        user.login === 'admin' && user.password === 'admin' ? 'admin' : 'user',
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
    if (isHasToken) {
      const savedUser = await this.userRepository.save(user);
      const modeler = new Modeler();
      modeler.user_guid = user.guid;
      modeler.account = 0;
      await this.modelerRepository.save(modeler);
      return {user: savedUser}
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
