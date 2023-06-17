import { IsNotEmpty, Length } from 'class-validator';

export class BuyModelDto {
    @IsNotEmpty()
    modelUuid: string;

    @IsNotEmpty()
    modelerUuid: string;

    @IsNotEmpty()
    modelPrice: number;
}