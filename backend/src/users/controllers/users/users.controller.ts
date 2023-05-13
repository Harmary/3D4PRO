import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';


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

  // @Post('/uploadAvatar')
  // @UseInterceptors(FileInterceptor('file'))
  // async uploadFile(@UploadedFile() file: Express.Multer.File): Promise {
  //   const uploadedFile = await this.fileUploadService.uploadFile(
  //     file.buffer,
  //     file.originalname,
  //   );
  //   console.log('File has been uploaded,', uploadedFile.fileName);
  // }

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
}
