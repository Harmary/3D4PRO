import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

@ApiTags('Admin')
@Controller('/Admin')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/GetAllUsers')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Get('SelectUsers/:guid')
  async findUsersById(@Param('guid') guid: string) {
    return await this.userService.findUsersByGuid(guid);
  }

  @Delete('/DeleteUser/:guid')
  async deleteUserbyGuid(@Param('guid') guid: string) {
    await this.userService.deleteUser(guid);
  }

  @Post('CreateNewUser')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        login: { type: 'string' },
        password: { type: 'string' },
      },
    },
  })
  @UsePipes(ValidationPipe)
  async createUsers(@Body() createUserDto: CreateUserDto) {
    createUserDto.guid = uuidv4();
    return await this.userService.createUser(createUserDto);
  }
}
