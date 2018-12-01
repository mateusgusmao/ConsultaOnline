import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { ConsultasService } from '../consultas.service';
import { ConsultasComponent } from '../consultas/consultas.component';

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
  items: MenuItem[];
  displayDialog: boolean;

  constructor(private rota: Router,
              private consultaService: ConsultasService) { }

  ngOnInit() {
        this.listar();
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
    let c = { nomePaciente: " ", especialidade: " ", planoSaude: " ", data: null, situacao: " ", status: false};
    for (let prop in c) {
      c[prop] = consulta[prop];
    }
    c["id"] = consulta.id;
    return c;
  }

  }