import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-adm-cadastro',
  templateUrl: './adm-cadastro.component.html',
  styleUrls: ['./adm-cadastro.component.css']
})
export class AdmCadastroComponent implements OnInit {

  adms: User[] = [];
  adm: User = new User();

  especialidades: SelectItem[] = [];
  selectedEspecialidade: String;

  constructor(private userService: UserService) {
           
           this.especialidades = [
        {label:'Escolha especialidade', value:null},
        {label:'Dermatologista', value:{id:1, name: 'Dermatologista'}},
        {label:'Cardiologista', value:{id:2, name: 'Cardiologista'}},
        {label:'Oftamologista', value:{id:3, name: 'Oftamologista'}},
        {label:'Pediatria', value:{id:4, name: 'Pediatria'}}
        ]

   }

  ngOnInit() {}

   register(adm: User){
   this.userService.AddADM(this.adm);
 }

}
