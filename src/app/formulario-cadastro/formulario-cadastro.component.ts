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
  

  constructor(private userService: UserService) {}

  ngOnInit() {}
  
 register(user: User){
   this.userService.AddUser(this.user);
 }

}

