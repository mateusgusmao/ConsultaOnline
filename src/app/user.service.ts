import { Injectable } from '@angular/core';
import { User } from './models/user'

@Injectable()
export class UserService {

  adms: User[] = [];
  adm: User = new User();

  users: User[] = [];
  user: User = new User();

    AddUser(user: User){
  this.users.push(user);
}

    AddADM(adm: User){
  this.adms.push(adm);
}

  getUsers(){
    return this.users;
  }

  getADMS(){
    return this.adms;
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

    ADMExiste(adm: User){
    let exist:boolean = false;
  for(let i:number=0;i<this.adms.length;i++){
    if(this.adms[i].username == adm.username && this.adms[i].password == adm.password){
       exist = true;
    }else{
      alert("Administrador ainda não cadastrado")
     }
    }
    return exist;  
  }

  constructor() { }

}
