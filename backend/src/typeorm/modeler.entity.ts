import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Model } from './model.entity';

@Entity('Modeler')
export class Modeler {
  // @OneToMany(() => Model, (model) => model.modeler_guid)
  @PrimaryGeneratedColumn('uuid',{
    name: 'modeler_guid',
  })
  guid: string;

  @OneToOne(() => User, user => user.guid, {onDelete: 'CASCADE'})
  @Column('uuid', {
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
