import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

      displayDialog: boolean;
      consulta: Consulta = new Consulta();
      selectedConsulta: Consulta;
      newConsulta: boolean;
      consultas: Consulta[];

  constructor(private consultaService: ConsultasService ) { }

  ngOnInit() {
    this.consultas= this.consultaService.getConsultas(); 

  }
  showDialogToAdd() {
    this.newConsulta = true;
    this.consulta = new Consulta();
    this.displayDialog = true;
}

save() {
  let consultas = [...this.consultas];
  if(this.newConsulta)
      consultas.push(this.consulta);
  else
      consultas[this.findSelectedConsultaIndex()] = this.consulta;
  
  this.consultas = consultas;
  this.consulta = null;
  this.displayDialog = false;

}

delete() {
  let index = this.findSelectedConsultaIndex();
  this.consultas = this.consultas.filter((val,i) => i!=index);
  this.consulta = null;
  this.displayDialog = false;
}

onRowSelect(event) {
  this.newConsulta = false;
  this.consulta = this.cloneConsulta(event.data);
  this.displayDialog = true;
}

cloneConsulta(c: Consulta): Consulta {
  let consulta = new Consulta();
  for(let prop in c) {
      consulta[prop] = c[prop];
  }
  return consulta;
}

findSelectedConsultaIndex(): number {
  return this.consultas.indexOf(this.selectedConsulta);
 }
}

class PrimeConsulta implements Consulta {

  constructor(public especialidade:string, public clinica:string, public planoSaude:string, public data:Date) {}

  }
  

