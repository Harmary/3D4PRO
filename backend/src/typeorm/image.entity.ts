import { Column, Entity, Generated, OneToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from './user.entity';

@Entity('Image')
@Unique(["image_guid"])
export class Image {
  @OneToOne(() => User, user => user.avatarId, { onDelete: "CASCADE" })
  @PrimaryGeneratedColumn()
  public image_id: number;

  @Column('varchar', {
    length: 200
  })
  public link: string;

  
  @Column('uuid', {
    name: "image_guid"
  })
  @Generated('uuid')
  public image_guid: string;
 
}

