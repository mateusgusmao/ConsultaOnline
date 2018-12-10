import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import { Router, Route } from '@angular/router';
import {ContextMenuModule,MenuItem, TabMenuModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { UserService } from '../user.service';
import { User } from '../models/user';
import {Message} from 'primeng/primeng';
import { EspecialidadeService } from '../especialidade.service';
import { Especialidade } from '../models/especialidade';
import {ProgressSpinnerModule} from 'primeng/primeng';

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
 
   growl: Message[] = [];
   carregando: boolean;
 
   listaDeConsultas: any[]=[];
   cols: any[];
   displayDialog: boolean;
 
   especialidades: SelectItem[];
   planosSaude: SelectItem[];
 
   especialidade: Especialidade;
   relacaoEspecialidades:any[] = [];
   especialidadeSelecionada;
 
   constructor(private consultaService:ConsultasService, private userService: UserService, 
                                     private rota: Router, private especialidadesService: EspecialidadeService) { 
 
     /*this.consultas = this.getConsultas();
       console.log(this.consultas);*/
   
   }
 
 
   showError() {
     this.growl = [];
     this.growl.push({severity:'warn', summary:'Consulta Aprovada', detail:'Não é possivel editar sua consulta já aprovada'});
 }
 
   ngOnInit() {
     this.listar();
     this.listarEsp();
 
     this.planosSaude = [
       {label:'Sim', value: 'Sim'},
       {label:'Não', value: 'Não'},
      ]
      this.especialidades = []
   }
 
   listar(){
      this.carregando = true;
 
     this.consultaService.listarPorIdUsuario(this.userService.usuarioLogado.id).subscribe(listaDeConsultas => {
       this.listaDeConsultas = listaDeConsultas;
 
       this.carregando = false;
     });
   }
 
   voltarSituacao(){
     this.consulta.situacao = "Pendente";
   }
 
   atualizar() {
     if (this.consulta.id != undefined)
       //this.mudarEspecialidade()
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
     if(this.consulta.situacao == "Pendente"){
     this.displayDialog = true;
     }else{
       this.showError();
     }
   }
   
   cloneConsulta(consulta: Consulta): Consulta {
     let c = { especialidade: " ", planoSaude: " ", data: null,turno: " ", situacao: " ", status: false};
     for (let prop in c) {
       c[prop] = consulta[prop];
     }
     c["id"] = consulta.id;
     return c;
   }
 
   listarEsp(){
     this.especialidadesService.listarTodos().subscribe(relacaoEspecialidades =>{
       this.relacaoEspecialidades = relacaoEspecialidades;
 
       this.especialidades = this.relacaoEspecialidades
         .map(esp => {
           return {label: esp.nome, value: esp.nome}
         });
 
         console.log('especialidades...')
         console.log(this.especialidades);
         console.log(this.planosSaude)
         
         
     });
   }
 
   onRowSelectEsp(event) {
     console.log(event.data)
     console.log(this.especialidadeSelecionada.nome);
   }
   mudarEspecialidade(){
     //this.consulta.especialidade = this.especialidadeSelecionada.nome;
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
