import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import { Router, Route } from '@angular/router';
import {ContextMenuModule,MenuItem, TabMenuModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { UserService } from '../user.service';
import { User } from '../models/user';
import {Message} from 'primeng/primeng';

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

  user: User;

  constructor(private consultaService:ConsultasService, private userService: UserService, private rota: Router) { 
    this.consulta = { especialidade: "", planoSaude: "", data: null, status: false, idPaciente: "", situacao: "", nomePaciente: ""}

    /*this.consultas = this.getConsultas();
      console.log(this.consultas);*/
  }

  ngOnInit() {}

  adicionarConsulta(){

    this.consulta.idPaciente = this.userService.usuarioLogado.id;
    this.consulta.nomePaciente = this.userService.usuarioLogado.username;

    this.consultaService.adicionarConsultaFirebase(this.consulta);
    console.log(this.consulta)

    //this.userService.usuarioLogado.consultas.push(this.consulta);
     
    
    console.log("UsuárioConsulta : " + this.consulta.nomePaciente)

    //console.log(this.consulta.id)
    //this.userService.usuarioLogado.username = this.consulta.usuarioconsulta;
    //console.log(this.consulta.usuarioconsulta)
    //console.log(this.userService.usuarioLogado.consultas)
  }

 /* aprovarConsulta(consulta){
     this.consulta = consulta;
    if(this.consulta.status = false){
    this.consulta.situacao = "Aprovado";
    console.log(this.consulta.situacao)
  }
}*/



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
