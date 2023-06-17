import { Body, Controller, Get, Post } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { BuyModelDto } from 'src/users/dtos/buyModel.dto';

@Controller('Shop')
@ApiTags('Shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Get('/GetAllModels')
    async getModels() {
        return await this.shopService.getAllModels()
    }

    @Post('/BuyModel')
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                modelUuid: { type: 'string' },
                modelerUuid: { type: 'string' },
                modelPrice: { type: 'number'}
            },
        },
    })
    async buyModel(@Body() data:BuyModelDto) {
        return await this.shopService.buyModel(data)
    }

}
