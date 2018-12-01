import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {CalendarModule} from  'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { UserService } from '../user.service';
import { User } from 'firebase/app';

@Component({
  selector: 'app-marcar',
  templateUrl: './marcar.component.html',
  styleUrls: ['./marcar.component.css']
})
export class MarcarComponent implements OnInit {

      /*especialidades: SelectItem[] = [];
      planosSaude: SelectItem[] = [];
      selectedEspecialidade: String;
      selectedPlanoSaude: String;  

      //consulta: Consulta = new Consulta();
      selectedConsulta: Consulta;
      newConsulta: boolean;
      consultas: Consulta[];*/

      especialidades:SelectItem[];
      planosSaude: SelectItem[];

      consulta: Consulta;

  constructor( private consultaService: ConsultasService,private userService: UserService) {
    this.consulta = { especialidade: "", planoSaude: "", data: null, status: false, idPaciente: "", situacao: "Pendente", nomePaciente: ""}

    this.especialidades = [
      {label:'Escolha especialidade', value:null},
      {label:'Dermatologista', value: 'Dermatologista'},
      {label:'Cardiologista', value: 'Cardiologista'},
      {label:'Oftamologista', value:'Oftamologista'},
      {label:'Pediatria', value:'Pediatria'},
     ]

     this.planosSaude = [
      {label:'Você tem Plano de Saúde? ', value:null},
      {label:'Sim', value: 'Sim'},
      {label:'Não', value: 'Não'},
     ]

  }

  ngOnInit() {

    //this.consultas= this.consultaService.getConsultas();
      }

      adicionarConsulta(){

        this.consulta.idPaciente = this.userService.usuarioLogado.id;
        this.consulta.nomePaciente = this.userService.usuarioLogado.username;
    
        this.consultaService.adicionarConsultaFirebase(this.consulta);
        console.log(this.consulta)
    
        console.log("UsuárioConsulta : " + this.consulta.nomePaciente)
    
        //console.log(this.consulta.id)
        //this.userService.usuarioLogado.username = this.consulta.usuarioconsulta;
        //console.log(this.consulta.usuarioconsulta)
        //console.log(this.userService.usuarioLogado.consultas)
      }
  /*save() {
  let consultas = [...this.consultas];
  if(this.newConsulta)
      consultas.push(this.consulta);
  else
      consultas[this.findSelectedConsultaIndex()] = this.consulta;
  this.consultaService.AddConsulta(this.consulta);
  console.log(this.consulta);
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

 // constructor(public id:number, public especialidade:string, public clinica:string, public planoSaude:string, public data:Date) {}

  }
  */

}
