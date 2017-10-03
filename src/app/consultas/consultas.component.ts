import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

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
      this.activeTab = this.items[2];
  }

}
