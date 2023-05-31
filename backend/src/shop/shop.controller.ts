import { Controller, Get } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('Shop')
export class ShopController {
    constructor(private readonly shopService: ShopService) {}

    @Get('/GetAllModels')
    async getModels() {
        return await this.shopService.getAllModels()
    }

}
