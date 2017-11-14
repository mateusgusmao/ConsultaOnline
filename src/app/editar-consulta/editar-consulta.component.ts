import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import { Router } from '@angular/router';
import {TabMenuModule, MenuItem} from 'primeng/primeng';
import {CalendarModule} from  'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editar-consulta',
  templateUrl: './editar-consulta.component.html',
  styleUrls: ['./editar-consulta.component.css']
})
export class EditarConsultaComponent implements OnInit {
      
      especialidades: SelectItem[] = [];
      planosSaude: SelectItem[] = [];
      selectedEspecialidade: String;
      selectedPlanoSaude: String;  

      consulta: Consulta = new Consulta();
      selectedConsulta: Consulta;
      newConsulta: boolean;
      consultas: Consulta[];

  constructor(private consultaService: ConsultasService,private route: ActivatedRoute) {
       
       this.especialidades = [
        {label:'Escolha especialidade', value:null},
        {label:'Dermatologista', value:{id:1, name: 'Dermatologista'}},
        {label:'Cardiologista', value:{id:2, name: 'Cardiologista'}},
        {label:'Oftamologista', value:{id:3, name: 'Oftamologista'}},
        {label:'Pediatria', value:{id:4, name: 'Pediatria'}}
       ]

       this.planosSaude = [
        {label:'Escolha Plano de Saúde', value:null},
        {label:'SUS', value:{id:1, name: 'SUS'}},
        {label:'Particular', value:{id:2, name: 'Particular'}},
        {label:'Outro', value:{id:3, name: 'Outro'}}
       ]

   }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    let pos:number = this.consultaService.procurarPorId(id);
    this.consulta = this.consultaService.consultas[pos];
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

deletar(id){
  this.consultaService.deletarConsultaId(this.consulta.id);
}
}

class PrimeConsulta implements Consulta {

  constructor(public especialidade:string, public id:number, public clinica:string, public planoSaude:string, public data:Date) {}

  }



