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

users: User[] = [];
user: User = new User();
  
items: MenuItem[];
activeTab: MenuItem;

  constructor(private userService: UserService) {}

  ngOnInit() {    
    this.items = [
      {label: 'Home', icon: 'fa-home'},
      {label: 'Entrar', icon: 'fa-user-circle', routerLink: '/login'},
      {label: 'Consultas', icon: 'fa-calendar'},
      {label: 'Contato', icon: 'fa-phone'},
      {label: 'Redes Sociais', icon: 'fa-facebook'}
  ];
      this.activeTab = this.items[1];

  }
 register(user: User){
   this.userService.AddUser(this.user);
 }

}

