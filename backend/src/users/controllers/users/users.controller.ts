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


@ApiTags('Admin')
@Controller('/Admin')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/GetAllUsers')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Get('/GetAllModelers')
  async getModelers() {
    return await this.userService.getModelers();
  }

  @Get('SelectUsers/:guid/:role')
  async findUsersById(@Param('guid') guid: string, @Param('role') role: string) {
    if (role === 'user') return await this.userService.findUsersByGuid(guid);
    else return await this.userService.findModelerByGuid(guid)
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
    return await this.userService.createUser(createUserDto);
  }

  @Post('CreateNewModeler')
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
  async createModeler(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createModeler(createUserDto);
  }
}
