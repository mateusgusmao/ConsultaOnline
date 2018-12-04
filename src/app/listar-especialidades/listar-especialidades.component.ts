import { Component, OnInit } from '@angular/core';
import { Especialidade } from '../models/especialidade';
import { EspecialidadeService } from '../especialidade.service';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-listar-especialidades',
  templateUrl: './listar-especialidades.component.html',
  styleUrls: ['./listar-especialidades.component.css']
})
export class ListarEspecialidadesComponent implements OnInit {

  especialidade: Especialidade;
  relacaoEspecialidades:any[] = [];
  especialidadeSelecionada;
  items: MenuItem[];

  constructor(private rota: Router,
              private especialidadesService: EspecialidadeService) { }

  ngOnInit() {
        this.listarTodos();
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

}
