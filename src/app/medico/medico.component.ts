import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../medico.service';
import { EspecialidadeService } from '../especialidade.service';
import { Medico } from '../models/medico';
import {SelectItem} from 'primeng/primeng';
import { Especialidade } from '../models/especialidade'
import { EspecialidadeComponent } from '../especialidade/especialidade.component';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.css']
})
export class MedicoComponent implements OnInit {

  medico: Medico
  turno: SelectItem[];
  sexo: SelectItem[];
  especialidade:SelectItem[];

  relacaoEspecialidades:any[] = [];
  especialidadeSelecionada;
  especialidades: SelectItem[];

  constructor(private medicoService: MedicoService, private especialidadesService: EspecialidadeService) {
    this.medico = {username: "", turno: "", sexo: "", idEspecialidade: "", nomeEspecialidade: ""}

    this.turno = [
      {label: 'Manhã', value: 'Manhã'},
      {label: 'Tarde', value: 'Tarde'},
      {label: 'Noite', value: 'Noite'},
    ]

    this.sexo = [
      {label: 'Masculino', value: 'Masculino'},
      {label: 'Femininio', value: 'Feminino'}
    ]
   }

  ngOnInit() {
    this.listarEsp();
  }

  adicionarMedico() {

    //this.medico.idEspecialidade = this.especialidadeService.especial.id;
    //this.medico.nomeEspecialidade = this.especialidadeService.especial.nome;
    
    //this.escolherEsp();
    this.medicoService.adicionarMedicoFirebase(this.medico);

    //this.especialidadeService.especial = null;

    console.log(this.medico)
  }

  listarEsp(){
    this.especialidadesService.listarTodos().subscribe(relacaoEspecialidades =>{
      this.relacaoEspecialidades = relacaoEspecialidades;
      this.especialidades = this.relacaoEspecialidades
     .map(esp => {
       return {label: esp.nome, value: esp.nome}
     });
    });
  }
  especialidadeSelect(event){
    console.log(event.value);
    this.medico.nomeEspecialidade = event.value;
    console.log(this.medico.nomeEspecialidade);
  }
  onRowSelectEsp(event) {
    console.log(event.data)
    console.log(this.especialidadeSelecionada.nome);
  }
  escolherEsp(){
  this.medico.idEspecialidade = this.especialidadeSelecionada.id;
  this.medico.nomeEspecialidade = this.especialidadeSelecionada.nome;
}
}
