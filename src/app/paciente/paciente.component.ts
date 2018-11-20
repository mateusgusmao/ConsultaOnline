import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/primeng';
import {FieldsetModule} from 'primeng/primeng';
import { UserService } from '../user.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {

  pacienteLogado: String;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.dadosPaciente();

  }

  dadosPaciente(){
    this.pacienteLogado = this.userService.usuarioLogado.username;
  }

}
