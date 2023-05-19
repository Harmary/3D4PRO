/* eslint-disable prettier/prettier */
import { Column, Entity, OneToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Modeler } from './modeler.entity';
import { Image } from './image.entity'

@Entity('User')
export class User {
  @OneToOne(() => Modeler, modeler => modeler.user_guid, {onDelete: 'CASCADE'})
  @PrimaryGeneratedColumn('uuid', {
    name: 'guid',
  })
  guid: string;

  @Column({
    name: 'name',
    nullable: false,
    default: '',
  })
  name: string;

  @Column({
    name: 'login',
    nullable: false,
    default: '',
  })
  login: string;

  @Column({
    name: 'email',
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    name: 'password',
    nullable: false,
    default: '',
  })
  password: string;

  @OneToOne(() => Image, image => image.image_id)
  @Column({
    name: 'avatar_id',
    type: 'integer',
  })
  avatarId: number;
}
