import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.css']
})
export class ListarUsersComponent implements OnInit {

  relacaoUsers:any[] = [];
  userSelecionado;
  items: MenuItem[];

  constructor(private rota:Router,
              private userService:UserService) { }

  ngOnInit() {
        this.listarTodos();
     this.items = [
            {label: 'Deletar', icon: 'fa-close', command: (event) => this.deletar(this.userSelecionado)},
        ];
  }

    deletar(funcionario){
    this.userService.deletar(funcionario).then(()=>{
      this.listarTodos();
    });
  }

    listarTodos(){
    this.userService.listarTodos().subscribe(relacaoUsers=>{
      this.relacaoUsers = relacaoUsers;
    });
  }

}
