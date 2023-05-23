import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Image } from './image.entity'
import { Model } from './model.entity';


@Entity('Texture')
export class Texture {
    @PrimaryGeneratedColumn('rowid', {
        name: 'texture_id'
    })
    public texture_id: number;

    @Column({
        name: 'name',
        nullable: false,
        default: '',
    })
    name: string;

    @OneToOne(() => Image, image => image.image_id, { onDelete: "CASCADE" })
    @Column('uuid', {
        name: 'image_guid'
    })
    public image_guid: string;

    @ManyToOne(() => Model, model => model.guid, { onDelete: "CASCADE" })
    @Column('uuid', {
        name: "model_guid"
    })
    public model_guid: string;

}

