import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('Modeler')
export class Modeler {
  @PrimaryGeneratedColumn('uuid',{
    name: 'modeler_guid',
  })
  guid: string;

  @OneToOne(() => User, user => user.guid, {onDelete: 'CASCADE'})
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
