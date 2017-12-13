import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  userUsuario: string;
  senhaUsuario: string;

  constructor(private userService: UserService) {}

  ngOnInit() {}
  
register() {
  let novoUsuario: User = {username:this.userUsuario, password:this.senhaUsuario};
  this.userUsuario = "";
  this.senhaUsuario = "";
 
  console.log(novoUsuario.id);
  
   this.userService.salvar(novoUsuario);
  
   }

}

