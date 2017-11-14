import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import { Router, Route } from '@angular/router';
import {Message,TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {GrowlModule} from 'primeng/primeng';

@Component({
  selector: 'app-gerenciar-consultas',
  templateUrl: './gerenciar-consultas.component.html',
  styleUrls: ['./gerenciar-consultas.component.css'],
})
export class GerenciarConsultasComponent implements OnInit {

  items: MenuItem[];
  msgs: Message[];

  consulta: Consulta = new Consulta();
  newConsulta: boolean;
  consultas:Consulta[] = [];
  selectedConsulta: Consulta;

  constructor(private consultaService:ConsultasService, private rota: Router) {
            
        this.consultas = this.getConsultas();

        this.items = [
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteConsulta(this.selectedConsulta)}
        ];
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

     deleteConsulta(consulta: Consulta) {
        let index = -1;
        for(let i = 0; i < this.consultas.length; i++) {
            if(this.consultas[i].id == consulta.id) {
                index = i;
                break;
            }
        }
        this.consultas.splice(index, 1);
    }

 }


