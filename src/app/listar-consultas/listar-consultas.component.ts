import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { Router } from '@angular/router';
import { TabMenuModule, MenuItem } from 'primeng/primeng';
import { SelectItem } from 'primeng/primeng';
import { ConsultasService } from '../consultas.service';
import { ConsultasComponent } from '../consultas/consultas.component';
import { Especialidade } from '../models/especialidade';
import { EspecialidadeService } from '../especialidade.service';
import { MedicoService } from '../medico.service';

@Component({
  selector: 'app-listar-consultas',
  templateUrl: './listar-consultas.component.html',
  styleUrls: ['./listar-consultas.component.css']
})
export class ListarConsultasComponent implements OnInit {

  consulta: Consulta;
  relacaoConsultas: any[] = [];
  consultas: Consulta[] = [];
  consultaSelecionada;

  especialidade: Especialidade;
  relacaoEspecialidades: any[] = [];
  especialidades: SelectItem[];
  planosSaude: SelectItem[];
  turnos: SelectItem[];
  especialidadeSelecionada;

  items: MenuItem[];
  displayDialog: boolean;

  medicoSelecionado;

  relacaoEspMed: any[] = [];
  medicosFiltrados: any[] = [];

  constructor(private rota: Router,
    private consultaService: ConsultasService, private especialidadesService: EspecialidadeService,private medicoService: MedicoService) { }

  ngOnInit() {
    this.listar();
    this.listarEsp();

    this.planosSaude = [
      {label:'Sim', value: 'Sim'},
      {label:'Não', value: 'Não'},
     ]
     this.turnos = [
       {label: 'Manhã', value: 'Manhã'},
       {label: 'Tarde', value: 'Tarde'},
       {label: 'Noite', value: 'Noite'},
     ]
     this.especialidades = []
  }
  listar() {
    this.consultaService.listarTodos().subscribe(relacaoConsultas => {
      this.relacaoConsultas = relacaoConsultas;
    });
  }
  aprovar() {
    this.consulta.situacao = "Aprovada";
    console.log(this.consulta.situacao)
  }

  atualizar() {
    if (this.consulta.id != undefined)
      //this.mudarEspecialidade();
    this.aprovar();
    this.consultaService.atualizarConsultaFirebase(this.consulta).then(() => {
      this.listar();
      this.consulta = null;
      this.displayDialog = false;
    });
  }

  apagarConsulta() {
    this.consultaService.apagarConsultaFirebase(this.consulta).then(() => {
      this.listar();
      this.consulta = null;
      this.displayDialog = false;
    });
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

  filtrarMedicosPorTurno($event = null) {
    if (this.consulta.turno) {
      this.medicosFiltrados = this.relacaoEspMed.filter(m => m.turno === this.consulta.turno)
      .map(med => {
        return {label: med.username, value: med.username}
      });
      console.log(this.medicosFiltrados);
    }
  }
  onRowSelect(event) {
    console.log(event.data)
    this.consulta = this.cloneConsulta(event.data);
    this.displayDialog = true;
  }

  cloneConsulta(consulta: Consulta): Consulta {
    let c = { nomePaciente: " ", especialidade: " ", planoSaude: " ", turno: " ", data: null, situacao: " ", status: false };
    for (let prop in c) {
      c[prop] = consulta[prop];
    }
    c["id"] = consulta.id;
    return c;
  }


  onRowSelectEsp(event) {
    console.log(event.data)
    console.log(this.especialidadeSelecionada.nome);
  }
  mudarEspecialidade() {
    //this.consulta.especialidade = this.especialidadeSelecionada.nome;
  }
  onRowSelectMed(event) {
    console.log(event.data)
    console.log(this.medicoSelecionado.username);
  }

}