import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { ConsultasService } from '../consultas.service';

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.css']
})
export class ListarConsultasComponent implements OnInit {

  consulta: Consulta;
  relacaoConsultas:any[] = [];
  consultaSelecionada;
  items: MenuItem[];

  constructor(private rota: Router,
              private consultaService: ConsultasService) { }

  ngOnInit() {
        this.listarTodos();
     this.items = [
            {label: 'Deletar', icon: 'fa-close', command: (event) => this.deletar(this.consultaSelecionada)}
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

}