import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent implements OnInit {

  constructor(private userService: UserService,private rota: Router) { }

  ngOnInit() {
  }

  deslogarUsuario(){

    console.log(this.userService.usuarioLogado.username);
    this.userService.usuarioLogado = null;
    console.log(this.userService.usuarioLogado);
    this.rota.navigate(['/']);
      

  }
}
