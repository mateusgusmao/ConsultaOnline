import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import { Router, Route } from '@angular/router';
import {ContextMenuModule,MenuItem, TabMenuModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { UserService } from '../user.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {
  
 /*consultas:Consulta[] = [];
  selectedConsulta: Consulta;
  consulta: Consulta = new Consulta();
  newConsulta: boolean;*/

  consulta: Consulta;

  constructor(private consultaService:ConsultasService, private userService: UserService, private rota: Router) { 
    this.consulta = { especialidade: "", planoSaude: "", data: null, status: false}

    /*this.consultas = this.getConsultas();
      console.log(this.consultas);*/
  }

  ngOnInit() {}

  adicionarConsulta(){
    this.consultaService.adicionarConsultaFirebase(this.consulta);
    console.log(this.consulta)

  }

  /*getConsultas(){
      return this.consultaService.getConsultas();
  }*/

 /*  findSelectedConsultaIndex(): number {  //Prime
  return this.consultas.indexOf(this.selectedConsulta);
 }

 onRowSelect(event) {   //Prime
  this.newConsulta = false;
  this.consulta = this.cloneConsulta(event.data);
  this.rota.navigate(['/main/editar-consulta',this.selectedConsulta.id]);
  console.log(this.selectedConsulta.id);
}

cloneConsulta(c: Consulta): Consulta { //Prime
  let consulta = new Consulta();
  for(let prop in c) {
      consulta[prop] = c[prop];
  }
  return consulta;
} */



}