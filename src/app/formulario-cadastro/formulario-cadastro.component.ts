import { Component, OnInit } from '@angular/core';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import { CadastroServiceService } from '../cadastro-service.service';


@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {
  
items: MenuItem[];
activeTab: MenuItem;

  constructor() {
}

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'fa-home', items:[{label: 'Login'}]},
      {label: 'Entrar', icon: 'fa-user-circle', routerLink: '/formulario'},
      {label: 'Consultas', icon: 'fa-calendar'},
      {label: 'Contato', icon: 'fa-phone'},
      {label: 'Redes Sociais', icon: 'fa-facebook'}
  ];
      this.activeTab = this.items[1];

  }

}

