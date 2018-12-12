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
import { HorarioService } from '../horario.service';

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

      relacaohorarios:any[] = [];
      horariosFiltrados:any[] = [];
      horarios: SelectItem[];


  constructor( private consultaService: ConsultasService,private userService: UserService, 
  private especialidadesService: EspecialidadeService, private medicoService: MedicoService, private horarioService: HorarioService) {
    this.consulta = { especialidade: "", planoSaude: "", data: "",turno: "", status: false, idPaciente: "", situacao: "Pendente", nomePaciente: "", nomeMedico: "", horario: ""}

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
    this.listarHorarios()
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

        //this.escolherEsp();
        //this.escolherMed();
        this.consultaService.adicionarConsultaFirebase(this.consulta);
        console.log(this.consulta)
    
        console.log("UsuárioConsulta : " + this.consulta.nomePaciente)
    
        //console.log(this.consulta.id)
        //this.userService.usuarioLogado.username = this.consulta.usuarioconsulta;
        //console.log(this.consulta.usuarioconsulta)
        //console.log(this.userService.usuarioLogado.consultas)
      }

      listarEsp(){
        this.especialidadesService.listarTodos().subscribe(relacaoEspecialidades =>{
          this.relacaoEspecialidades = relacaoEspecialidades;
          this.especialidades = this.relacaoEspecialidades
         .map(esp => {
           return {label: esp.nome, value: esp.nome}
         });
        });
      }

      listarMedicos(){
        this.medicoService.listarPorNomeEsp(this.consulta.especialidade).subscribe(relacaoEspMed =>{
          this.relacaoEspMed = relacaoEspMed;
          this.medicosFiltrados = relacaoEspMed
            .map(med => {
           return {label: med.username, value: med.username}
         });
          this.filtrarMedicosPorTurno();
        });
      }

    listarHorarios(){
        this.horarioService.listarPorTurno(this.consulta.turno).subscribe(relacaohorarios =>{
          this.relacaohorarios = relacaohorarios
          this.horarios = this.relacaohorarios
          .map(hor => {
            return {label: hor.hora, value: hor.hora}
          });
        });
      }

      especialidadeSelect(event){
        console.log(event.value);
        this.consulta.especialidade = event.value;
        console.log(this.consulta.especialidade);
        this.listarMedicos();
      }

      medicoSelect(event){
        console.log(event.value);
        this.consulta.nomeMedico = event.value;
        console.log(this.consulta.nomeMedico);
      }
      horarioSelect(event){
        console.log(event.value);
        this.consulta.horario = event.value;
        console.log(this.consulta.horario);
      }
  
      filtrarMedicosPorTurno($event = null) {
        if (this.consulta.turno) {
          this.medicosFiltrados = this.relacaoEspMed.filter(m => m.turno === this.consulta.turno)
          .map(med => {
            return {label: med.username, value: med.username}
          });
          //console.log(this.medicosFiltrados);
          //this.filtrarHorariosPorTurno();
          this.listarHorarios();
        }   
      }

      filtrarHorariosPorTurno($event = null){
        if (this.consulta.turno) {
          this.horariosFiltrados = this.relacaohorarios.filter(hor => hor.turno === this.consulta.turno)
          .map(hor => {
            return {label: hor.hora, value: hor.hora}
          });
          console.log(this.horariosFiltrados);
        } 
      }   

    /*escolherEsp(){
        this.consulta.especialidade = this.especialidadeSelecionada.nome;
        console.log(this.especialidadeSelecionada.nome);
        console.log(this.consulta.planoSaude)
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
    }*/
    /* onRowSelectMed(event) {
          console.log(event.data)
          console.log(this.medicoSelecionado.username);
      }
      escolherMed(){
        this.consulta.nomeMedico = this.medicoSelecionado.username;
        console.log(this.medicoSelecionado.username);
      }*/

    }