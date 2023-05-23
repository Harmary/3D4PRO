import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Category')
export class Category{
    @PrimaryGeneratedColumn('rowid')
    category_id: number;

    @Column('varchar', {
        name: "name",
        length: 100
    })
    name: string;
}