import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { User } from 'src/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
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
    const payload = { login: user.login, sub: user.guid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async registerUser(
    user: CreateUserDto,
  ): Promise<{ user: User; token: string }> {
    const token = this.jwtService.sign({ login: user.login, sub: user.guid });
    const savedUser = await this.userRepository.save(user);
    return { user: savedUser, token };
  }
}
