import { Component, OnInit } from '@angular/core';
import { Especialidade } from '../models/especialidade';
import { EspecialidadeService } from '../especialidade.service';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { HorarioService } from '../horario.service';
import { Horario } from '../models/horario';

@Component({
  selector: 'app-listar-especialidades',
  templateUrl: './listar-especialidades.component.html',
  styleUrls: ['./listar-especialidades.component.css']
})
export class ListarEspecialidadesComponent implements OnInit {

  especialidade: Especialidade;
  horario: Horario;

  relacaoEspecialidades:any[] = [];
  especialidadeSelecionada;
  items: MenuItem[];

  relacaoHorario: any[]=[];

  displayDialog: boolean;
  horarioSelecionado;

  constructor(private rota: Router,
              private especialidadesService: EspecialidadeService, private horarioService: HorarioService) { }

  ngOnInit() {
        this.listarTodos();
        this.listarHorarios();
     this.items = [
            {label: 'Deletar', icon: 'fa-close', command: (event) => this.deletar(this.especialidadeSelecionada)}
        ];
  }

    visualizar(especialidade){
    this.rota.navigate(['/visualizar-especialidade',this.especialidadeSelecionada.id]);
  }

  deletar(especialidade){
    this.especialidadesService.apagarEspecialidadeFirebase(especialidade).then(()=>{
      this.listarTodos();
    });
  }

    listarTodos(){
    this.especialidadesService.listarTodos().subscribe(relacaoEspecialidades =>{
      this.relacaoEspecialidades = relacaoEspecialidades;
    });
  }

  listarHorarios(){
    this.horarioService.listarTodos().subscribe(relacaoHorario =>{
      this.relacaoHorario = relacaoHorario;

    })
  }


  apagarHorario(){
    this.horarioService.apagarHorarioFirebase(this.horario);
    this.listarHorarios();
      this.horario = null;
    this.displayDialog = false;
  }
  onRowSelect(event) {
    console.log(event.data)
    this.horario =  this.cloneHorario(event.data);
    this.displayDialog = true;
  }

  cloneHorario(horario: Horario): Horario {
    let u = { hora: " ",turno: ""};
    for (let prop in u) {
      u[prop] = horario[prop];
    }
    u["id"] = horario.id;
    return u;
  }


}
