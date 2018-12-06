import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import { Consulta } from '../models/consulta'

@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  userUsuario: string;
  senhaUsuario: string;
  nomeUsuario: string;
  cpfUsuario: string;

   //novoUsuario: User
  
  
  constructor(private userService: UserService) {
     //this.novoUsuario = { username: "", password: "", consultas: [] }
  }

  ngOnInit() {}
  
register() {

  let novoUsuario: User = {username:this.userUsuario, password:this.senhaUsuario,nome: this.nomeUsuario,cpf: this.cpfUsuario};
  this.userUsuario = "";
  this.senhaUsuario = "";
  
  this.userService.salvar(novoUsuario);
  console.log(novoUsuario);
  

}

  listar(){
    this.userService.listarTodos().subscribe(resultado=>{
        let x = resultado;
        let y = x;
    });
  }

}



