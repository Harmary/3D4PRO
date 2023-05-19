import { Modeler } from './modeler.entity';
import { User } from './user.entity';
import { Image } from 'src/typeorm/image.entity';


const entities = [User, Modeler, Image];

export { User };
export { Modeler };
export { Image }
export default entities;
