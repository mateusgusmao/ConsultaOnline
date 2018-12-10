import { Component, OnInit } from '@angular/core';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-menu-adm',
  templateUrl: './menu-adm.component.html',
  styleUrls: ['./menu-adm.component.css']
})
export class MenuAdmComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    
    this.items = [
      {label: 'Gerenciar', icon: 'fa-cog', routerLink: './gerenciar'},
      {label: 'Aprovar de Consultas', icon: 'fa-book', routerLink: './listar-consultas'},
      {label: 'Lista de Usuários', icon: 'fa-users', routerLink: './listar-users'},
      {label: 'Especialidades', icon:'fa-file', routerLink: './listar-esp'},
      {label: 'Médicos', icon:'fa-user-md', routerLink: './listar-med'},
      {label: 'Sair', icon: 'fa-share-square', routerLink: '..'},

  ];
  }

}
