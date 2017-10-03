import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  users: User[] = [];
  user: User;

  items: MenuItem[];
  activeTab: MenuItem;

  constructor(private userService: UserService,private rota: Router) { 
    this.user = new User()
  }

  ngOnInit() {
  this.users = this.userService.getUsers();  

  this.items = [
      {label: 'Home', icon: 'fa-home'},
      {label: 'Entrar', icon: 'fa-user-circle', routerLink: '/login'},
      {label: 'Consultas', icon: 'fa-calendar'},
      {label: 'Contato', icon: 'fa-phone'},
      {label: 'Redes Sociais', icon: 'fa-facebook'}
  ];
      this.activeTab = this.items[1];
  }
  entrar(user:User){
   let podeLogar:boolean = false;
   podeLogar = this.userService.usuarioExiste(this.user);
   if(podeLogar){
     this.rota.navigate(["consultas"])
   }else{
     alert("Usuário não encontrado, faça seu cadastro")
   }
 }
}
