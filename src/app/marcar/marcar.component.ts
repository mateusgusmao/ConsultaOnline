import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {CalendarModule} from  'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-marcar',
  templateUrl: './marcar.component.html',
  styleUrls: ['./marcar.component.css']
})
export class MarcarComponent implements OnInit {

      especialidades: SelectItem[];
      selectedEspecialidade: string;  

      consulta: Consulta = new Consulta();
      selectedConsulta: Consulta;
      newConsulta: boolean;
      consultas: Consulta[];

  constructor( private consultaService: ConsultasService ) {

       this.especialidades = [];
        this.especialidades.push({label:'Escolha especialidade', value:null});
        this.especialidades.push({label:'Dermatologista', value:{id:1, name: 'Dermatologista'}});
        this.especialidades.push({label:'Cardiologista', value:{id:2, name: 'Cardiologista'}});
        this.especialidades.push({label:'Neurologista', value:{id:3, name: 'Neurologista'}});
        this.especialidades.push({label:'Oftamologista', value:{id:4, name: 'Oftamologista'}});
        this.especialidades.push({label:'Pediatria', value:{id:5, name: 'Pediatria'}});
    }

  ngOnInit() {
    this.consultas= this.consultaService.getConsultas();
  }

  save() {
  let consultas = [...this.consultas];
  if(this.newConsulta)
      consultas.push(this.consulta);
  else
      consultas[this.findSelectedConsultaIndex()] = this.consulta;
  
  this.consultas = consultas;
  this.consulta = null;

}

delete() {
  let index = this.findSelectedConsultaIndex();
  this.consultas = this.consultas.filter((val,i) => i!=index);
  this.consulta = null;
}

onRowSelect(event) {
  this.newConsulta = false;
  this.consulta = this.cloneConsulta(event.data);
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
