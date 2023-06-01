import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import * as JSZip from 'jszip';
import { Model, Modeler } from 'src/typeorm';
import { Image } from 'src/typeorm/image.entity';
import { Render } from 'src/typeorm/render.entity';
import { User } from 'src/typeorm/user.entity';
import { CreateModelDto } from 'src/users/dtos/CreateModel.dto';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export class UploadService {
    private readonly s3Client = new S3Client({
        region: this.configService.getOrThrow('AWS_REGION'),
        endpoint: this.configService.getOrThrow('AWS_ENDPOINT'),
    });

    constructor(
        @InjectRepository(Image) private readonly imageRepository: Repository<Image>,
        @InjectRepository(Render) private readonly renderRepository: Repository<Render>,
        @InjectRepository(Model) private readonly modelRepository: Repository<Model>,
        @InjectRepository(Modeler) private readonly modelerRepository: Repository<Modeler>,
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

    async uploadModel(req: any, model: CreateModelDto, file: Express.Multer.File, renders: Express.Multer.File[]) {
        const zip = new JSZip();
        const modelGuid = uuidv4();
        const extractedFiles = await zip.loadAsync(file.buffer);
        const files: string[] = [];
        const modeler = await this.modelerRepository.find({ where: { user_guid: req['user'].sub } });

        for (const [path, file] of Object.entries(extractedFiles.files)) {
            if (!file.dir) {
                const data = await file.async('nodebuffer');
                const key = `models/${modeler[0].guid}/${modelGuid}/${file.name}`;
                await this.s3Client.send(
                    new PutObjectCommand({
                        Bucket: '373825a7-49aec453-9ac5-487f-a13b-54d1d68bc0de',
                        Key: key,
                        Body: data,
                    }),
                );
                if (file.name.endsWith('.gltf') || file.name.endsWith('.glb') || file.name.endsWith('.obj') || file.name.endsWith('.fbx')) {
                    files.push(key);
                }
            }
        }

        if (renders !== undefined) {
            await this.s3Client.send(
                new PutObjectCommand({
                    Bucket: '373825a7-49aec453-9ac5-487f-a13b-54d1d68bc0de',
                    Key: `models/${modeler[0].guid}/${modelGuid}/renders/${renders[0].originalname}`,
                    Body: renders[0].buffer,
                }),
            );

            const image = await this.imageRepository.save({
                link: `models/${modeler[0].guid}/${modelGuid}/renders/${renders[0].originalname}`
            })

            const render = await this.renderRepository.save({
                image_guid: image.image_guid,
                model_guid: modelGuid
            })
        }

        return await this.modelRepository.save(
            {
                guid: modelGuid,
                name: model.name,
                modeler_guid: modeler[0].guid,
                description: model.description,
                price: model.price,
                polygons: model.polygons,
                link: `https://s3.timeweb.com/373825a7-49aec453-9ac5-487f-a13b-54d1d68bc0de/${files[0]}`
            }
        );

    }
}
