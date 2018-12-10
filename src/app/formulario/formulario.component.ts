import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { TabMenuModule, MenuItem } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { Message } from 'primeng/primeng';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  user: User;
  userUsuario: string;
  senhaUsuario: string;

  msgs: Message[] = [];

  constructor(private userService: UserService, private rota: Router) {
  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Usuário/Senha inválido', detail: 'Verique as informações e tente novamente.' });
  }
  showInfo() {
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Bem-vindo ao HEAZY', detail: 'Seja bem-vindo!' });

  }

  login(user, senha) {
    user = this.userUsuario;
    senha = this.senhaUsuario;

    this.userService.loginUsuario(user, senha).subscribe(meuObservable => {
      if (meuObservable == null) {
        this.showError();
      } else {
        this.rota.navigate(['/main/home']);
        this.userService.loginUsuario(user, senha).subscribe(meuObservable => {
          this.userService.usuarioLogado = meuObservable as User
          console.log("Usuario Logado: " + this.userService.usuarioLogado.username)

        })
      }
    });
  }
    
  ngOnInit() {
  }
    
}
