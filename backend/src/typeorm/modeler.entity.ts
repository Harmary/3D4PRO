/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Modeler')
export class User {
  @PrimaryGeneratedColumn('uuid',{
    name: 'modeler_guid',
  })
  guid: string;

  @Column({
    name: 'user_guid',
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'account',
    nullable: false,
    default: 0,
  })
  login: number;
}
