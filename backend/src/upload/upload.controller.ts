import {
    Controller,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
    UseGuards,
    Req,
    Request,
    Body,
    UploadedFiles,
} from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { Image } from 'src/typeorm/image.entity';
import { CreateModelDto } from 'src/users/dtos/CreateModel.dto';


@Controller('Upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @UseGuards(JwtAuthGuard)
    @Post('Avatar')
    @ApiBearerAuth('JWT')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                file: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    // new MaxFileSizeValidator({ maxSize: 1000 }),
                    // new FileTypeValidator({ fileType: 'image/jpeg' }),
                ],
            }),
        )
        file: Express.Multer.File,
        @Req() req: Request,
    ): Promise<Image> {
        return this.uploadService.uploadAvatar(req['user'], file.originalname, file.buffer);
    }

    @UseGuards(JwtAuthGuard)
    @Post('Model')
    @ApiConsumes('multipart/form-data')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                model: {
                    type: 'string',
                    format: 'binary',
                },
                name: { type: 'string' },
                description: { type: 'string' },
                price: { type: 'string' },
                renders: {
                    type: 'string',
                    format: 'binary',
                },
            },
        },
    })
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'model'},
        { name: 'renders'},
    ]))
    async uploadModel(
        @Body()
        CreateModelDto: CreateModelDto,
        @UploadedFiles()
        files: {renders?: Express.Multer.File[], model: Express.Multer.File[]},
        @Req() req: Request,
    ) {
        return await this.uploadService.uploadModel(req, CreateModelDto, files.model[0], files.renders);
    }
}
