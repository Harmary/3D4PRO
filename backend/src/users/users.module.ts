import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category, Model, User } from 'src/typeorm';
import { Modeler } from 'src/typeorm/modeler.entity';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User, Modeler, Category, Model])],
  controllers: [UsersController],
  providers: [UsersService, JwtService, JwtStrategy],
})
export class UsersModule {}
