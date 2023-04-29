/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('User')
export class User {
  @PrimaryColumn({
    type: 'uuid',
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

  @Column({
    name: 'avatar_id',
    type: 'integer',
    nullable: true,
  })
  avatarId: number;
}
