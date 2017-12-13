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

  user: User;
  userUsuario: string;
  senhaUsuario: string;

  selectedValue: string = "val1";
  
  constructor(private userService: UserService,private rota: Router) { 
    //this.user = new User()
  }
    loginUsuario(user, senha){
      user = this.userUsuario;
      senha = this.senhaUsuario;
      this.userService.loginUsuario(user, senha).subscribe(usuario => {
        if(usuario == null){
          alert("Usuário não cadastrado no banco.")
        } else{
          console.log("Usuario logado.");
          this.userService.usuarioLogado = usuario; 
          this.rota.navigate(['/main']); 


        }
      });
    } 

  ngOnInit() {
  //this.users = this.userService.getUsers();  

  }
  /*entrar(user:User){
   let podeLogar:boolean = false;
   podeLogar = this.userService.usuarioExiste(this.user);
   if(podeLogar){
     this.rota.navigate(["main"])
   }else{
     alert("Usuário não encontrado, faça seu cadastro")
   }
 } */

}
