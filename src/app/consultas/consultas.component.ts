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

  listaDeConsultas: any[]=[];
  cols: any[];
  displayDialog: boolean;

  especialidades:SelectItem[];
  planosSaude: SelectItem[];
  

  constructor(private consultaService:ConsultasService, private userService: UserService, private rota: Router) { 

    /*this.consultas = this.getConsultas();
      console.log(this.consultas);*/

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
    this.listar();
  }

  listar(){
    this.consultaService.listarPorIdUsuario(this.userService.usuarioLogado.id).subscribe(listaDeConsultas => {
      this.listaDeConsultas = listaDeConsultas;
    });
  }
  
  atualizar() {
    if (this.consulta.id != undefined)
      this.consultaService.atualizarConsultaFirebase(this.consulta).then(() => {
        this.listar();
        this.consulta = null;
        this.displayDialog = false;
      });
  }

  apagarConsulta(){
    this.consultaService.apagarConsultaFirebase(this.consulta).then(() => {
      this.listar();
      this.consulta = null;
      this.displayDialog = false;
    });
  }
  
  onRowSelect(event) {
    console.log(event.data)
    this.consulta = this.cloneConsulta(event.data);
    this.displayDialog = true;
  }
  
  cloneConsulta(consulta: Consulta): Consulta {
    let c = { especialidade: " ", planoSaude: " ", data: null, situacao: " ", status: false};
    for (let prop in c) {
      c[prop] = consulta[prop];
    }
    c["id"] = consulta.id;
    return c;
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
