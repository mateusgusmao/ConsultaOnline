import { Component, OnInit } from '@angular/core';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import { UserService } from '../user.service';

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
      {label: 'Home', icon: 'fa-home', routerLink: './home'},
      {label: 'Paciente', icon: 'fa-address-card', routerLink: './paciente'},
      {label: 'Consultas', icon: 'fa-calendar', routerLink: './consultas'},
      {label: 'Sobre', icon: 'fa-info', routerLink: './sobre'},
      {label: 'Sair', icon: 'fa-share-square', routerLink: './sair'},

  ];
  }

}

