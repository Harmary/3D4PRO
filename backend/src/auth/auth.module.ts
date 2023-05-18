import { Module } from '@nestjs/common';
import { AuthService } from './services/auth/auth.service';
import { AuthController } from './controllers/auth/auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MailModule } from 'src/mail/mail.module';
import { Modeler } from 'src/typeorm/modeler.entity';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './jwt/local.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    PassportModule,
    MailModule,
    JwtModule.register({
      secret: 'secret', // Replace with your own secret key
      signOptions: { expiresIn: '1h' }, // Replace with your own expiration time
    }),
    TypeOrmModule.forFeature([User, Modeler]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
