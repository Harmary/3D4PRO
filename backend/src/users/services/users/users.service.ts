import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, Model, User } from 'src/typeorm';
import { Modeler } from 'src/typeorm/modeler.entity';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Modeler) private readonly modelerRepository: Repository<Modeler>,
    @InjectRepository(Model) private readonly modelRepository: Repository<Model>,
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
  ) { }

  createUser(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  createModeler(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    const modeler = new Modeler();
    newUser.guid = uuidv4();
    modeler.user_guid = newUser.guid;
    modeler.account = 0;
    this.userRepository.save(newUser);
    return this.modelerRepository.save(modeler);
  }

  getUsers() {
    return this.userRepository.find();
  }

  addCategory(name: string) {
    const category = new Category();
    category.name = name;
    return this.categoryRepository.save(category);
  }

  getModelers() {
    return this.modelerRepository.find();
  }

  getCategories() {
    return this.categoryRepository.find();
  }

  deleteUser(guid: string) {
    return this.userRepository.delete(guid);
  }

  findUsersByGuid(guid: string) {
    return this.userRepository.query(`SELECT "User".name, "User".guid, "User".email, "User".login, "Image".link FROM "User", "Image" WHERE "User".avatar_id = "Image".image_id AND "User".guid = '${guid}'`);;
  }

  async findModelerByGuid(guid: string) {
    const infoAboutModeler = await this.userRepository.query(`SELECT "User".name, "User".email, "User".login, "Modeler".account, "Image".link
                                            FROM "User"
                                            JOIN "Modeler" ON "User".guid = "Modeler".user_guid and "Modeler".user_guid = '${guid}'
                                            JOIN "Image" ON "User".avatar_id = "Image".image_id;`);
    const models = await this.modelRepository.query(`SELECT DISTINCT "Model".guid, 
        "Model"."name", 
        "Model"."description", 
        "Model"."polygons", 
        "Model"."link",
        "Category"."name" as "category",
        "Model"."price",
        "Model"."variants",
        "Model"."loading_date",
        "User"."name" as "modeler",
        "User"."guid" as "modelerGuid",
        "Image"."link" as "render"
        FROM "Model"
        LEFT JOIN "Category" ON "Model"."category_id" = "Category"."category_id"
        JOIN "Modeler" ON  "Model"."modeler_guid" = "Modeler"."modeler_guid" AND "Modeler"."user_guid" = '${guid}'
        JOIN "User" ON "Modeler"."user_guid" = "User"."guid"
        JOIN "Render" ON "Render"."model_guid" = "Model"."guid"
        JOIN "Image" ON "Image"."image_guid" = "Render"."image_guid";`);
    return [{ ...infoAboutModeler[0], models: models }];
  }
}
