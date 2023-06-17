import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Model, Modeler, User, Image } from 'src/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { BuyModelDto } from 'src/users/dtos/BuyModel.dto';

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
        return await this.modelRepository.query(`SELECT DISTINCT "Model".guid, 
		"Model"."name", 
		"Model"."description", 
		"Model"."polygons", 
		"Model"."link",
		"Model"."variants",
 		"Category"."name" as "category",
		"Model"."price",
		"Model"."loading_date",
		"User"."name" as "modeler",
		"Image"."link" as "render"
        FROM "Model"
        LEFT JOIN "Category" ON "Model"."category_id" = "Category"."category_id"
        JOIN "Modeler" ON  "Model"."modeler_guid" = "Modeler"."modeler_guid"
        JOIN "User" ON "Modeler"."user_guid" = "User"."guid"
        JOIN "Render" ON "Render"."model_guid" = "Model"."guid"
        JOIN "Image" ON "Image"."image_guid" = "Render"."image_guid";`)
    }

    async buyModel(data: BuyModelDto) {
        return await this.modelerRepository.query(`
        UPDATE "Modeler" SET account = account  + ${data.modelPrice}
        WHERE user_guid = '${data.modelerUuid}';
        `);
    }

}
