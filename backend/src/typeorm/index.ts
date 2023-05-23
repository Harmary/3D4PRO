import { Render } from '@nestjs/common';
import { Model } from './model.entity';
import { Modeler } from './modeler.entity';
import { User } from './user.entity';
import { Image } from './image.entity';
import { Texture } from './texture.entity';
import { Category } from './category.entity';


const entities = [User, Modeler, Image, Model, Render, Texture, Category];

export { User };
export { Category }
export { Modeler };
export { Image };
export { Model };
export { Render };
export { Texture };
export default entities;
