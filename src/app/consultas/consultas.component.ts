import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import { Router, Route } from '@angular/router';
import {ContextMenuModule,MenuItem, TabMenuModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  
  consultas:Consulta[] = [];
  selectedConsulta: Consulta;
  consulta: Consulta = new Consulta();
  newConsulta: boolean;

  constructor(private consultaService:ConsultasService, private rota: Router) { 
      this.consultas = this.getConsultas();
      console.log(this.consultas);
  }

  ngOnInit() {}

  getConsultas(){
      return this.consultaService.getConsultas();
  }

    findSelectedConsultaIndex(): number {
  return this.consultas.indexOf(this.selectedConsulta);
 }

 onRowSelect(event) {
  this.newConsulta = false;
  this.consulta = this.cloneConsulta(event.data);
  this.rota.navigate(['/main/editar-consulta',this.selectedConsulta.id]);
  console.log(this.selectedConsulta.id);
}

cloneConsulta(c: Consulta): Consulta {
  let consulta = new Consulta();
  for(let prop in c) {
      consulta[prop] = c[prop];
  }
  return consulta;
}



}