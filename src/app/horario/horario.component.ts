import { Component, OnInit } from '@angular/core';
import { HorarioService } from '../horario.service';
import { Horario } from '../models/horario';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

    horario: Horario
    turno: SelectItem[];
    horarioSelecionado;

    relacaoHorario:any[] = [];

  constructor(private horarioService: HorarioService) {
    this.horario = {hora: "", turno: ""}
  }

  ngOnInit() {

    this.turno = [
      {label: 'Manhã', value: 'Manhã'},
      {label: 'Tarde', value: 'Tarde'},
      {label: 'Noite', value: 'Noite'},
    ]
  }

  adicionarHorario(){
    this.horarioService.adicionarHorarioFirebase(this.horario);
    console.log(this.horario);
  }
}