import { Component, OnInit } from '@angular/core';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-tela-principal',
  templateUrl: './tela-principal.component.html',
  styleUrls: ['./tela-principal.component.css']
})
export class TelaPrincipalComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

        this.items = [
      {label: 'Home', icon: 'fa-home', routerLink: '/main'},
      {label: 'Perfil', icon: 'fa-user-circle'},
      {label: 'Consultas', icon: 'fa-calendar', routerLink: './consultas'},
      {label: 'Contato', icon: 'fa-phone'},
      {label: 'Redes Sociais', icon: 'fa-facebook'},
      {label: 'Sair', icon: 'fa-share-square', routerLink: '..'}

  ];
  }

}

