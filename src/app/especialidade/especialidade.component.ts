import { Component, OnInit } from '@angular/core';
import { Especialidade } from '../models/especialidade'
import { EspecialidadeService } from '../especialidade.service'
import { UserService } from '../user.service'

@Component({
  selector: 'app-especialidade',
  templateUrl: './especialidade.component.html',
  styleUrls: ['./especialidade.component.css']
})
export class EspecialidadeComponent implements OnInit {

  especialidade: Especialidade;

  constructor(private especialidadeService: EspecialidadeService, private userService: UserService) {
    this.especialidade = { nome: ""}
  }

  ngOnInit() {
  }

  adicionarEspecialidade() {

    this.especialidadeService.adicionarEspecialidadeFirebase(this.especialidade)

    //this.especialidade.id = this.especialidadeService.especial.id;
    // this.especialidade.nome = this.especialidadeService.especial.nome;

    console.log(this.especialidade)




  }
}
