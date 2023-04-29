/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  guid: string;

  @IsNotEmpty()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @MinLength(3)
  login: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}
