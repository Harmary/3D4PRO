import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { Model, Modeler, User, Image } from 'src/typeorm';
import { ShopController } from './shop.controller';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';
import { JwtService } from '@nestjs/jwt';
import { ShopService } from './shop.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([User, Image, Model, Modeler]),
    ],
    controllers: [ShopController],
    providers: [ShopService, JwtService, JwtStrategy]
})
export class ShopModule { }
