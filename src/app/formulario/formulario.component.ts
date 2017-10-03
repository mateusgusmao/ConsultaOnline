import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  users: User[] = [];
  user: User = new User();

  items: MenuItem[];
  activeTab: MenuItem;

  constructor() { }

  ngOnInit() {
  this.items = [
      {label: 'Home', icon: 'fa-home'},
      {label: 'Entrar', icon: 'fa-user-circle', routerLink: '/login'},
      {label: 'Consultas', icon: 'fa-calendar', routerLink: '/consultas'},
      {label: 'Contato', icon: 'fa-phone'},
      {label: 'Redes Sociais', icon: 'fa-facebook'}
  ];
      this.activeTab = this.items[1];
  }
 
}
