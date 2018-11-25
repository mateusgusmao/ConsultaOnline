import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { EspecialidadeService } from '../especialidade.service';
import { Medico } from '../models/medico';
import { Especialidade } from '../models/especialidade'

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medico: Medico

  constructor(private medicoService: MedicoService) {
    this.medico = {username: "", horario: ""}
   }

  ngOnInit() {
  }

  adicionarMedico() {
    this.medicoService.adicionarMedicoFirebase(this.medico);
    console.log(this.medico)
  }
}
