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

  //selectedValue: string = "val1";
  
  constructor(private userService: UserService,private rota: Router) { 
 }
    /*loginUsuario(user, senha){
      user = this.userUsuario;
      senha = this.senhaUsuario;
      this.userService.loginUsuario(user, senha).subscribe(usuario => {
        if(user == null){
          alert("Usuário não cadastrado no banco.")
        }else if(user == "" && senha == "") {
          console.log("Preencha os campos de usuário e senha!");
        } else{
          console.log("Usuario logado: "+user );
          this.userService.usuarioLogado = user; 
          this.rota.navigate(['/main']); 


        }
      });
    } */

    login(user, senha){
      user = this.userUsuario;
      senha = this.senhaUsuario;
      
      this.userService.loginUsuario(user, senha).subscribe(meuObservable => {
        if(meuObservable == null){
          alert("Usuário não cadastrado no banco.")
        } else{
          this.rota.navigate(['/main/consultas']);

          this.userService.loginUsuario(user, senha).subscribe(meuObservable =>
          this.userService.usuarioLogado = meuObservable as User);
          
          //console.log(this.userService.usuarioLogado)
        }
      });
     }        
    /**  if(user == this.userUsuario && senha == this.senhaUsuario){
        this.rota.navigate(['/main'])
       } else {
          console.log("usuário não existe");
        }
      }
     */

    signInWithGoogle() {
      this.userService.loginGoogle()
        .then(() => {
          this.rota.navigate(['/main']);
        })
        .catch((err) => console.log(err));
    }

    irParaAdministracao(){
      this.rota.navigate(['/adm-menu/listar-users']);
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
