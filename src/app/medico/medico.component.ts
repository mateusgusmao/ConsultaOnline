import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { EspecialidadeService } from '../especialidade.service';
import { Medico } from '../models/medico';
import { Especialidade } from '../models/especialidade'
import { EspecialidadeComponent } from '../especialidade/especialidade.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medico: Medico

  constructor(private medicoService: MedicoService, private especialidadeService: EspecialidadeService) {
    this.medico = {username: "", horario: "", idEspecialidade: "", nomeEspecialidade: ""}
   }

  ngOnInit() {
  }

  adicionarMedico() {

    this.medicoService.adicionarMedicoFirebase(this.medico);
    console.log(this.medico)
  }
}
