import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { MailService } from '../../../mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
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
    const payload = {
      login: user.login,
      sub: user.guid,
      role:
        user.login === 'admin' && user.password === 'admin' ? 'admin' : 'user',
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(
    user: CreateUserDto,
  ): Promise<{ user: User; token: string }> {
    const token = this.jwtService.sign({
      login: user.login,
      sub: user.guid,
      role: 'user',
    });
    const savedUser = await this.userRepository.save(user);
    return { user: savedUser, token };
  }

  async registerModeler(email: string, guid: string) {
    const payload = { login: email, sub: guid, role: 'modeler' };
    const token = this.jwtService.sign(payload);
    await this.mailService.sendUserConfirmation(email, token);
  }
}
