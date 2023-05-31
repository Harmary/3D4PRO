/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length} from 'class-validator';

export class CreateModelDto {
    guid: string;

    @IsNotEmpty()
    @Length(100)
    name: string;

    @IsNotEmpty()
    @Length(100)
    description: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    polygons: number;
}
