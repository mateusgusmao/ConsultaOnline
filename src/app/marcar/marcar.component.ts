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
import { EspecialidadeService } from '../especialidade.service';
import { MedicoService } from '../medico.service';

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

      turnos: SelectItem[];

      relacaoEspecialidades:any[] = [];
      especialidadeSelecionada; 

      invalidDates: Array<Date>;

      relacaoEspMed: any[] = [];
      medicosFiltrados: any[] = [];
      medicoSelecionado; 
      //relacaoMedTur: any[]=[];


  constructor( private consultaService: ConsultasService,private userService: UserService, 
  private especialidadesService: EspecialidadeService, private medicoService: MedicoService) {
    this.consulta = { especialidade: "", planoSaude: "", data: "",turno: "", status: false, idPaciente: "", situacao: "Pendente", nomePaciente: "", nomeMedico: ""}

    /*this.especialidades = [
      {label:'Escolha especialidade', value:null},
      {label:'Dermatologista', value: 'Dermatologista'},
      {label:'Cardiologista', value: 'Cardiologista'},
      {label:'Oftamologista', value:'Oftamologista'},
      {label:'Pediatria', value:'Pediatria'},
     ]*/

  }
   

  ngOnInit() {
    this.listarEsp();
    //this.consultas= this.consultaService.getConsultas();
    let today = new Date();
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];


    
    this.planosSaude = [
      {label:'Sim', value: 'Sim'},
      {label:'Não', value: 'Não'},
     ]
    
     this.turnos = [
      {label: 'Manhã', value: 'Manhã'},
      {label: 'Tarde', value: 'Tarde'},
      {label: 'Noite', value: 'Noite'},
    ]
      }

      adicionarConsulta(){

        this.consulta.idPaciente = this.userService.usuarioLogado.id;
        this.consulta.nomePaciente = this.userService.usuarioLogado.nome;

        this.escolherEsp();
        this.escolherMed();
        this.consultaService.adicionarConsultaFirebase(this.consulta);
        console.log(this.consulta)
    
        console.log("UsuárioConsulta : " + this.consulta.nomePaciente)
    
        //console.log(this.consulta.id)
        //this.userService.usuarioLogado.username = this.consulta.usuarioconsulta;
        //console.log(this.consulta.usuarioconsulta)
        //console.log(this.userService.usuarioLogado.consultas)
      }

      escolherEsp(){
        this.consulta.especialidade = this.especialidadeSelecionada.nome;
        console.log(this.especialidadeSelecionada.nome);
        console.log(this.consulta.planoSaude)
      }

      listarEsp(){
        this.especialidadesService.listarTodos().subscribe(relacaoEspecialidades =>{
          this.relacaoEspecialidades = relacaoEspecialidades;
        });
      }
    
      onRowSelectEsp(event) {
        console.log(event.data)
        console.log(this.especialidadeSelecionada.nome);
        this.consulta.especialidade = this.especialidadeSelecionada.nome;
        this.listarMedicos();
        if(this.medicoSelecionado){
        if(this.especialidadeSelecionada.nome != this.medicoSelecionado.nomeEspecialidade){
          this.medicoSelecionado = null;
        }
      }
    }
      escolherMed(){
        this.consulta.nomeMedico = this.medicoSelecionado.username;
        console.log(this.medicoSelecionado.username);
      }
      listarMedicos(){
        this.medicoService.listarPorNomeEsp(this.consulta.especialidade).subscribe(relacaoEspMed =>{
          this.relacaoEspMed = relacaoEspMed;
          this.medicosFiltrados = relacaoEspMed;
          this.filtrarMedicosPorTurno();
        });
      }
      onRowSelectMed(event) {
          console.log(event.data)
          console.log(this.medicoSelecionado.username);
      }
  
      filtrarMedicosPorTurno($event = null) {
        if (this.consulta.turno) {
          this.medicosFiltrados = this.relacaoEspMed.filter(m => m.turno === this.consulta.turno);
        }
        
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