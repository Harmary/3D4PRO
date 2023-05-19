import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Image } from 'src/typeorm/image.entity';
import { User } from 'src/typeorm/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UploadService {
    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow('AWS_REGION'),
        endpoint: this.configService.getOrThrow('AWS_ENDPOINT'),
    });

    constructor(
        @InjectRepository(Image) private readonly imageRepository: Repository<Image>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly configService: ConfigService,
        ) { }

    async uploadAvatar(token: any, fileName: string, file: Buffer) {
        await this.s3Client.send(
            new PutObjectCommand({
                Bucket: '373825a7-49aec453-9ac5-487f-a13b-54d1d68bc0de',
                Key: `avatars/${token.sub}.${fileName.split('.').pop()}`,
                Body: file,
            }),
        );
        const result = await this.imageRepository.save({
            link: `https://s3.timeweb.com/373825a7-49aec453-9ac5-487f-a13b-54d1d68bc0de/avatars/${token.sub}.${fileName.split('.').pop()}`
        })
        this.userRepository.createQueryBuilder().update(User).set({ avatarId: result.image_id }).where("guid = :guid", { guid: token.sub }).execute();
        return this.imageRepository.findOne({ where: { image_id: result.image_id } });
    }

    async uploadModel(token: any, fileName: string, file: Buffer) {
        return await this.s3Client.send(
            new PutObjectCommand({
                Bucket: '373825a7-49aec453-9ac5-487f-a13b-54d1d68bc0de',
                Key: `models/${token.sub}/${fileName}`,
                Body: file,
            }),
        );
    }
}
