import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Image')
class PublicFile {
  @PrimaryGeneratedColumn('uuid')
  public image_guid: number;

  @Column()
  public link: string;

  @Column()
  public image_id: string;
}

export default PublicFile;
