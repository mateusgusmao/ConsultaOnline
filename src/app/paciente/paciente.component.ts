import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import { UserService } from '../user.service';
import { User } from '../models/user';
import {DialogModule} from 'primeng/primeng';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
  
  userlogado: User;
  user: User;

  nomePacienteLogado: String;
  senhaPacienteLogado: String;
  nomeUserPacienteLogado: String;
  cpfPacienteLogado: String;
  display: boolean = false;

  constructor(private userService: UserService) {
    this.userlogado = this.userService.usuarioLogado;
   }

  ngOnInit() {
    this.dadosPaciente();

  }

  showDialog(){
    this.display = true;
  }

  atualizar() {
    console.log(this.userlogado);
      this.userService.atualizar(this.userService.usuarioLogado).then(() => {
        alert('Alterações salvas com sucesso');
        this.display = false;
      });
  }

  dadosPaciente(){
    this.nomePacienteLogado = this.userService.usuarioLogado.nome;
    this.nomeUserPacienteLogado = this.userService.usuarioLogado.username;
    this.cpfPacienteLogado = this.userService.usuarioLogado.cpf;
    this.senhaPacienteLogado = this.userService.usuarioLogado.password;
  }

}