import { Controller, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from 'src/auth/jwt/local-auth.guard';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { User } from 'src/typeorm';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  async login(@Body() user: { login: string; password: string }) {
    return this.authService.login(user);
  }

  @Post('register/:isHasToken')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        login: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
    },

  })
  async registerUser(
    @Body() createUserDto: CreateUserDto, 
    @Param('isHasToken') isHasToken: boolean
  ): Promise<{ user: User; token?: string }> {
    createUserDto.guid = uuidv4();
    const registeredUser = await this.authService.registerUser(createUserDto, isHasToken);
    return registeredUser;
  }

  @Post('sendRegisterMailToModeler/:email')
  async registerModeler(@Param('email') email: string) {
    const guid = uuidv4();
    return this.authService.registerLinkModeler(email, guid);
  }
}
