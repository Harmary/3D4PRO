import dayjs from 'dayjs';
import { Column, Entity, Generated, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Modeler } from './modeler.entity';
import { Category } from './category.entity';
import { Texture } from './texture.entity';
import { Render } from './render.entity';

@Entity('Model')
export class Model {
    // @OneToMany( () => Render, render => render.model_guid)
    // @OneToMany( () => Texture, texture => texture.model_guid)
    @PrimaryGeneratedColumn('uuid', {
        name: 'guid',
    })
    guid: string;

    @Column({
        name: 'name',
        nullable: false,
        default: '',
        type:'varchar',
        length: 100
    })
    name: string;

    @Column({
        name: 'description',
        nullable: false,
        default: '',
        type: 'varchar',
        length: 300
    })
    description: string;

    @Column({
        name: 'polygons',
        nullable: false,
        type: 'int'
    })
    polygons: number;

    @Column({
        name: 'link',
        nullable: false,
        default: '',
        type: 'varchar',
        length: 200
    })
    link: string;

    @OneToOne( () => Category, category => category.category_id)
    @Column({
        name: 'category_id',
        type: 'integer',
        nullable: true
    })
    categoryId: number;

    // @ManyToOne( () => Modeler, modeler => modeler.guid, {onDelete: "CASCADE"})
    @Column('uuid', {
        name: "modeler_guid"
    })
    @Generated('uuid')
    public modeler_guid: string;

    @Column({
        name: 'price',
        type: 'integer',
    })
    price: number;

    @Column({
        name:'loading_date',
        default: new Date(),
        type:'date',
    })
    loading_date: string
}
