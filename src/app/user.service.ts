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
  usuarioExiste(user: User){
    let exist:boolean = false;
  for(let i:number=0;i<this.users.length;i++){
    if(this.users[i].username == user.username && this.users[i].password == user.password){
       exist = true;
    }else{
      alert("Usuário ainda não cadastrado")
     }
    }
    return exist;  
  }

  constructor() { }

}
