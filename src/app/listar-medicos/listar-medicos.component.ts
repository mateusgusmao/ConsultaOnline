import { Component, OnInit } from '@angular/core';
import { EspecialidadeService } from '../especialidade.service';
import { MedicoService } from '../medico.service';
import { Medico } from '../models/medico';
import { Especialidade } from '../models/especialidade';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-listar-medicos',
  templateUrl: './listar-medicos.component.html',
  styleUrls: ['./listar-medicos.component.css']
})
export class ListarMedicosComponent implements OnInit {

  medico: Medico;

  medicoSelecionado;
  turno: SelectItem[];
  sexo: SelectItem[];
  displayDialog: boolean;


  relacaoMedicos: any[] = [];
  relacaoClinica: any[] = [];

  especialidade: Especialidade;
  relacaoEspecialidades: any[] = [];
  especialidadeSelecionada;

  constructor(private especialidadesService: EspecialidadeService, private medicoService: MedicoService) {

  }

  ngOnInit() {
    this.listar();
    this.listarEsp()

    this.turno = [
      { label: 'Manhã', value: 'Manhã' },
      { label: 'Tarde', value: 'Tarde' },
      { label: 'Noite', value: 'Noite' },
    ]

    this.sexo = [
      { label: 'Masculino', value: 'Masculino' },
      { label: 'Femininio', value: 'Feminino' }
    ]
  }

  listar() {
    this.medicoService.listarTodos().subscribe(relacaoMedicos => {
      this.relacaoMedicos = relacaoMedicos;
    });
  }
  atualizar() {
    if (this.especialidadeSelecionada) {
      this.mudarEspecialidade();
      this.medicoService.atualizarMedicoFirebase(this.medico).then(() => {
        this.listar();
        this.especialidadeSelecionada = null;
        this.medico = null;
        this.displayDialog = false;
      });
    } else {
      this.medicoService.atualizarMedicoFirebase(this.medico).then(() => {
        this.listar();
        this.medico = null;
        this.displayDialog = false;
      });
    }
  }

  apagarMedico() {
    this.medicoService.apagarMedicoFirebase(this.medico).then(() => {
      this.listar();
      this.medico = null;
      this.displayDialog = false;
    });
  }

  onRowSelect(event) {
    console.log(event.data)
    this.medico = this.cloneMedico(event.data);
    this.displayDialog = true;
  }

  cloneMedico(medico: Medico): Medico {
    let m = { username: " ", turno: " ", sexo: " " };
    for (let prop in m) {
      m[prop] = medico[prop];
    }
    m["id"] = medico.id;
    return m;
  }

  listarEsp() {
    this.especialidadesService.listarTodos().subscribe(relacaoEspecialidades => {
      this.relacaoEspecialidades = relacaoEspecialidades;
    });
  }

  onRowSelectEsp(event) {
    console.log(event.data)
    console.log(this.especialidadeSelecionada.nome);
  }
  mudarEspecialidade() {
    this.medico.nomeEspecialidade = this.especialidadeSelecionada.nome;
  }

}
