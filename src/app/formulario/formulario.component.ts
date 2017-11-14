import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {RadioButtonModule} from 'primeng/primeng';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  selectedValue: string = "val1";
  

  users: User[] = [];
  user: User;

  constructor(private userService: UserService,private rota: Router) { 
    this.user = new User()
  }

  ngOnInit() {
  this.users = this.userService.getUsers();  

  }
  entrar(user:User){
   let podeLogar:boolean = false;
   podeLogar = this.userService.usuarioExiste(this.user);
   if(podeLogar){
     this.rota.navigate(["main"])
   }else{
     alert("Usuário não encontrado, faça seu cadastro")
   }
 }

/*optionlogin(){
  if(){

  }
}*/

}
