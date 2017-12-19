import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user'
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

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

  constructor(private rota:Router,
              private userService:UserService) { }

  ngOnInit() {
        this.listarTodos();
     this.items = [
            {label: 'Deletar', icon: 'fa-close', command: (event) => this.deletar(this.userSelecionado)}
        ];
  }

    visualizar(user){
    this.rota.navigate(['/visualizar-user',this.userSelecionado.id]);
  }

  deletar(user){
    this.userService.deletar(user).then(()=>{
      this.listarTodos();
    });
  }

    listarTodos(){
    this.userService.listarTodos().subscribe(relacaoUsers=>{
      this.relacaoUsers = relacaoUsers;
    });
  }

}
