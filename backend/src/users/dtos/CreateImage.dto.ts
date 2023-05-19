import {IsNotEmpty} from 'class-validator';

export class CreateImageDto {
    image_guid: string;

    @IsNotEmpty()
    link: string;

    imageId: number;
}
