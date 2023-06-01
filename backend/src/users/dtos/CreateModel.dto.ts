/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, Length} from 'class-validator';

export class CreateModelDto {
    guid: string;

    @IsNotEmpty()
    @Length(100)
    name: string;

    @IsNotEmpty()
    @Length(100)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    polygons: number;
}
