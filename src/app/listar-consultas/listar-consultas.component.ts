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

  constructor(private rota: Router,
              private consultaService: ConsultasService) { }

  ngOnInit() {
        this.listarTodos();
     this.items = [
            {label: 'Deletar', icon: 'fa-close', command: (event) => this.deletar(this.consultaSelecionada)},
            {label: 'Aprovar', icon: 'fa-check', command: (event) => this.aprovar(this.consultaSelecionada)}
        ];
  }

    visualizar(especialidade){
    this.rota.navigate(['/visualizar-consulta',this.consultaSelecionada.id]);
  }

  deletar(consulta){
    this.consultaService.apagarConsultaFirebase(consulta).then(()=>{
      this.listarTodos();
    });
  }

    listarTodos(){
    this.consultaService.listarTodos().subscribe(relacaoConsultas =>{
      this.relacaoConsultas = relacaoConsultas;
    });
  }

  aprovar(consulta){
    //this.consultaServive.aprovarConsulta(this.consultaSelecionada);
  }
   }