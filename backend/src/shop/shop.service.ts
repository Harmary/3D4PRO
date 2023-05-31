import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model, Modeler, User, Image } from 'src/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';

@Injectable()
export class ShopService {
    constructor(
        @InjectRepository(Image) private readonly imageRepository: Repository<Image>,
        @InjectRepository(Model) private readonly modelRepository: Repository<Model>,
        @InjectRepository(Modeler) private readonly modelerRepository: Repository<Modeler>,
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        private readonly configService: ConfigService,
    ) { }

    async getAllModels() {
        return await this.modelRepository.find()
    }
    
}
