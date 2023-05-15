import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm';
import { Modeler } from 'src/typeorm/modeler.entity';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Modeler) private readonly modelerRepository: Repository<Modeler>,
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

  getModelers() {
    return this.modelerRepository.find();
  }

  deleteUser(guid: string) {
    return this.userRepository.delete(guid);
  }

  findUsersByGuid(guid: string) {
    return this.userRepository.findOne({ where: { guid: guid } });
  }

  findModelerByGuid(guid: string) {
    return this.userRepository.query(`SELECT "User".name, "User".email, "User".login, "User".avatar_id, "Modeler".account FROM "User", "Modeler" WHERE "User".guid = "Modeler".user_guid AND "Modeler".user_guid = '${guid}'`);
  }
}
