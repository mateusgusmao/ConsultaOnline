import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { ConsultasService } from '../consultas.service';
import { ConsultasComponent } from '../consultas/consultas.component';
import { Especialidade } from '../models/especialidade';
import { EspecialidadeService } from '../especialidade.service';

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.css']
})
export class ListarConsultasComponent implements OnInit {

  consulta: Consulta;
  relacaoConsultas:any[] = [];
  consultas: Consulta[] =[];
  consultaSelecionada;

  especialidade: Especialidade;
  relacaoEspecialidades:any[] = [];
  especialidadeSelecionada;

  items: MenuItem[];
  displayDialog: boolean;

  constructor(private rota: Router,
              private consultaService: ConsultasService, private especialidadesService: EspecialidadeService) { }

  ngOnInit() {
        this.listar();
        this.listarEsp();
  }
    listar(){
    this.consultaService.listarTodos().subscribe(relacaoConsultas =>{
      this.relacaoConsultas = relacaoConsultas;
    });
  }
  aprovar(){
    this.consulta.situacao = "Aprovada";
    console.log(this.consulta.situacao)
  }

  atualizar() {
    if (this.consulta.id != undefined)
         this.mudarEspecialidade();
         this.aprovar();
      this.consultaService.atualizarConsultaFirebase(this.consulta).then(() => {
        this.listar();
        this.consulta = null;
        this.displayDialog = false;
      });
  }
  apagarConsulta(){
    this.consultaService.apagarConsultaFirebase(this.consulta).then(() => {
      this.listar();
      this.consulta = null;
      this.displayDialog = false;
    });
  }
  onRowSelect(event) {
    console.log(event.data)
    this.consulta = this.cloneConsulta(event.data);
    this.displayDialog = true;
  }
  
  cloneConsulta(consulta: Consulta): Consulta {
    let c = { nomePaciente: " ", especialidade: " ", planoSaude: " ",turno: " ", data: null, situacao: " ", status: false};
    for (let prop in c) {
      c[prop] = consulta[prop];
    }
    c["id"] = consulta.id;
    return c;
  }

  listarEsp(){
    this.especialidadesService.listarTodos().subscribe(relacaoEspecialidades =>{
      this.relacaoEspecialidades = relacaoEspecialidades;
    });
  }

  onRowSelectEsp(event) {
    console.log(event.data)
    console.log(this.especialidadeSelecionada.nome);
  }
  mudarEspecialidade(){
    this.consulta.especialidade = this.especialidadeSelecionada.nome;
  }

  }