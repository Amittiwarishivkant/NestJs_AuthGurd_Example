import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { User } from './user.entity';
import { Repository, Connection } from 'typeorm';

export type User = any;

@Injectable()
export class UsersService {
  private readonly user: User[];

  constructor(
    //   @InjectRepository(User)
    // private usersRepository: Repository<User>,
    // private connection: Connection
    ) {
    this.user = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
      {
        userId: 4,
        username: 'Amit',
        password: 'P@ssw0rd',
      },
    ];
  }

  async findOne(username: string): Promise<User | undefined> {
    return this.user.find(user => user.username === username);
  }



  // findAll(): Promise<User[]> {
  //   return this.usersRepository.find();
  // }

  // findOne(id: string): Promise<User> {
  //   return this.usersRepository.findOne(id);
  // }

  // async remove(id: string): Promise<void> {
  //   await this.usersRepository.delete(id);
  // }
}