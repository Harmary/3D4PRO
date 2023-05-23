import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category, User } from 'src/typeorm';
import { Modeler } from 'src/typeorm/modeler.entity';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Modeler) private readonly modelerRepository: Repository<Modeler>,
    @InjectRepository(Category) private readonly categoryRepository: Repository<Category>,
  ) {}

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

  findModelerByGuid(guid: string) {
    return this.userRepository.query(`SELECT "User".name, "User".email, "User".login, "Image".link, "Modeler".account FROM "User", "Modeler", "Image" WHERE "User".guid = "Modeler".user_guid AND "User".avatar_id = "Image".image_id AND "Modeler".user_guid = '${guid}'`);
  }
}
