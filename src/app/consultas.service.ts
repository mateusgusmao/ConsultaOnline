import { Injectable } from '@angular/core';
import { Consulta } from './models/consulta'

@Injectable()
export class ConsultasService {

  consultas: Consulta[] = [];
  consulta: Consulta = new Consulta();

  AddConsulta(consulta:Consulta){
    this.consultas.push(consulta);
  }

  getConsultas(){
    return this.consultas;
  }

  constructor() { }

}
