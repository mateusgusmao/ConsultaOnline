import { Injectable } from '@angular/core';
import { Consulta } from './models/consulta'

@Injectable()
export class ConsultasService {

  consultas: Consulta[] = [];
  consulta: Consulta = new Consulta();

  AddConsulta(consulta:Consulta){
    this.consulta.id++;
    this.consultas.push(consulta);

  }

  getConsultas(){
    return this.consultas;
  }

  deletarConsultaId(id){
    this.consultas.splice(this.procurarPorId(id),1);
    console.log("Deletado");
    console.log(this.consultas);
         /*let pos:number = -1;
      for (let i = 0; i < this.consultas.length; i++ ){
          if(this.consultas[i].id == id){
             pos = i;
           }

      }
      this.consultas.splice(pos,1); */
  }

 /* constructor() {
    let consultaA:Consulta = new Consulta();
    consultaA.data = new Date("09.26.2017");
    consultaA.especialidade = "W";
    consultaA.planoSaude = "Z";
    this.AddConsulta(consultaA);
   }*/

   getConsulta(id){
     let consulta:Consulta = new Consulta();
     consulta =  this.consultas[this.procurarPorId(id)];
     console.log("4dg45g");
     console.log(consulta);
     return consulta;
   }

   procurarPorId(id){
     let pos:number = -1;
      for (let i = 0; i < this.consultas.length; i++ ){
          if(this.consultas[i].id == id){
             pos =i;
           }

      }
      //método de busca
      //this.consultas[i].id == id
      //return this.consultas[pos]
      console.log("procurar")
      console.log(this.consultas[pos]);
      return pos; 

   }

}
