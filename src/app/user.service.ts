import { Injectable } from '@angular/core';
import { User } from './models/user'

@Injectable()
export class UserService {

  users: User[] = [];
  user: User = new User();

    AddUser(user: User){
  this.users.push(user);
  }

  getUsers(){
    return this.users;
  }

  constructor() { }

}
