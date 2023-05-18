import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UploadService {
    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow('AWS_REGION'),
        endpoint: this.configService.getOrThrow('AWS_ENDPOINT')
    });

    constructor(
        private readonly configService: ConfigService,
        private jwtService: JwtService,
        ) { }

    async upload(token: string, fileName: string, file: Buffer) {
        const tokenInfo = this.jwtService.decode(token)
        await this.s3Client.send(
            new PutObjectCommand({
                Bucket: '373825a7-49aec453-9ac5-487f-a13b-54d1d68bc0de',
                Key: `avatars/${JSON.parse(JSON.stringify(tokenInfo)).sub}/${fileName}`,
                Body: file,
            }),
        );
    }
}
