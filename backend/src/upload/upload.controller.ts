import {
    Controller,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';

@Controller('Upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @Post('Avatar')
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
    ) {
        await this.uploadService.upload(file.originalname, file.buffer);
    }

    @Post('Model')
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
    ) {
        await this.uploadService.upload(file.originalname, file.buffer);
    }
}
