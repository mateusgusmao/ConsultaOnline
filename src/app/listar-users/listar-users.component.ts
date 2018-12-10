import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user'
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.css']
})
export class ListarUsersComponent implements OnInit {

  user: User;
  relacaoUsers:any[] = [];
  userSelecionado;
  items: MenuItem[];

  displayDialog: boolean;

  constructor(private rota:Router,
              private userService:UserService, private consultaService: ConsultasService) { }

  ngOnInit() {
    this.listar();  
  }

  listar(){
    this.userService.listarTodos().subscribe(relacaoUsers=>{
     this.relacaoUsers = relacaoUsers;
    })
  }
  deletar(){
      this.userService.deletar(this.userSelecionado);
      this.listar();
      this.user = null;
      this.displayDialog = false;
  }
  onRowSelect(event) {
    console.log(event.data)
    this.user = this.cloneUser(event.data);
    this.displayDialog = true;
    }
  
    cloneUser(user: User): User {
      let u = { username: " ",password: "", nome: " ", cpf: " "};
      for (let prop in u) {
        u[prop] = user[prop];
      }
      u["id"] = user.id;
      return u;
    }

}
