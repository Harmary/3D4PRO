/* eslint-disable prettier/prettier */
import { IsNotEmpty, Length } from 'class-validator';

export class CreateModelDto {
    guid: string;

    @IsNotEmpty({ message: "Название не может быть пустым" })
    @Length(1, 100, { message: "Название не может быть больше 100 символов и меньше 1" })
    name: string;

    @IsNotEmpty()
    @Length(0, 300, { message: "Описание не может быть больше 300 символов" })
    description: string;

    @IsNotEmpty({ message: "Поле цена не может быть пустым" })
    price: number;

    @IsNotEmpty({ message: "Поле полигоны не может быть пустым" })
    polygons: number;
}
