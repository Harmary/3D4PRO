import {
    Controller,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
    Headers,
    UseGuards,
    Logger,
    Req
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { Request } from 'express';

@Controller('Upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @Post('Avatar')
    @ApiConsumes('multipart/form-data')
    @UseGuards(JwtAuthGuard)
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
        @Req() req:Request
    ) {
        const token = req.headers.authorization.replace('Bearer ', '');
        await this.uploadService.upload(token, file.originalname, file.buffer);
    }

    @Post('Model')
    @UseGuards(JwtAuthGuard)
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
    async uploadModel(
        @UploadedFile(
            new ParseFilePipe({
                validators: [
                    // new MaxFileSizeValidator({ maxSize: 1000 }),
                    // new FileTypeValidator({ fileType: 'image/jpeg' }),
                ],
            }),
        )
        file: Express.Multer.File,
        @Headers('Authorization') auth: string
    ) {
        await this.uploadService.upload(auth, file.originalname, file.buffer);
    }
}
