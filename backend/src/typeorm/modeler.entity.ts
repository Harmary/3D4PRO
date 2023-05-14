import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Modeler')
export class Modeler {
  @PrimaryGeneratedColumn('uuid',{
    name: 'modeler_guid',
  })
  guid: string;

  @Column({
    name: 'user_guid',
    nullable: false,
  })
  user_guid: string;

  @Column({
    name: 'account',
    nullable: false,
    default: 0,
  })
  account: number;
}
