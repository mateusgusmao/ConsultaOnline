import { Component } from '@angular/core';
import {TabMenuModule, MenuItem} from 'primeng/primeng';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'app';
  items: MenuItem[];


  ngOnInit() {

    this.items = [
      {label: 'Home', icon: 'fa-home', routerLink: '/homepage'},
      {label: 'Entrar', icon: 'fa-user-circle', routerLink: '/login'},
      {label: 'Consultas', icon: 'fa-calendar'},
      {label: 'Contato', icon: 'fa-phone'},
      {label: 'Redes Sociais', icon: 'fa-facebook'}
  ];
    
}
}








