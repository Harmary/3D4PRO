import {
    Controller,
    ParseFilePipe,
    Post,
    UploadedFile,
    UseInterceptors,
    UseGuards,
    Req,
    Request
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { ApiBearerAuth, ApiBody, ApiConsumes } from '@nestjs/swagger';
import { JwtAuthGuard2 } from 'src/auth/jwt/jwt.guard';
import { Image } from 'src/typeorm/image.entity';


@Controller('Upload')
export class UploadController {
    constructor(private readonly uploadService: UploadService) { }

    @UseGuards(JwtAuthGuard2)
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
        @Req() req: Request,
    ) {
        await this.uploadService.uploadModel(req['user'], file.originalname, file.buffer);
    }
}
