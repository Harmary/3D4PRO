import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Req,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@ApiTags('Admin')
@Controller('/Admin')
export class UsersController {
  constructor(private readonly userService: UsersService) { }

  @Get('/GetAllUsers')
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Get('/GetAllModelers')
  async getModelers() {
    return await this.userService.getModelers();
  }

  @Get('/GetCategories')
  async getCategories() {
    return await this.userService.getCategories();
  }

  @Get('SelectUsers/:guid/:role')
  async findUsersById(@Param('guid') guid: string, @Param('role') role: string, @Req() req: Request) {
    if (role === 'user') return await this.userService.findUsersByGuid(guid);
    else return await this.userService.findModelerByGuid(guid)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/DeleteUser/:guid')
  async deleteUserbyGuid(@Param('guid') guid: string, @Req() req: Request,) {
    if (req['user'].role === "admin")
      await this.userService.deleteUser(guid);
    else return HttpStatus.FORBIDDEN;
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

  @Post('AddCategory/:name')
  async addNewCategory(@Param('name') name: string) {
    return await this.userService.addCategory(name)
  }
}
