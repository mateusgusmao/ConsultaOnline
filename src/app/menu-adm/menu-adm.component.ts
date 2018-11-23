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
      {label: 'Lista', icon: 'fa-book', routerLink: './listar-users'},
      {label: 'Sair', icon: 'fa-share-square', routerLink: '..'},

  ];
  }

}
