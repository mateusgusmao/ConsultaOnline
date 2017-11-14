import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import {DropdownModule} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-adm-login',
  templateUrl: './adm-login.component.html',
  styleUrls: ['./adm-login.component.css']
})
export class AdmLoginComponent implements OnInit {

  adms: User[] = [];
  adm: User;

  especialidades: SelectItem[] = [];
  selectedEspecialidade: String;

  constructor(private userService: UserService,private rota: Router) {

           this.especialidades = [
        {label:'Escolha especialidade', value:null},
        {label:'Dermatologista', value:{id:1, name: 'Dermatologista'}},
        {label:'Cardiologista', value:{id:2, name: 'Cardiologista'}},
        {label:'Oftamologista', value:{id:3, name: 'Oftamologista'}},
        {label:'Pediatria', value:{id:4, name: 'Pediatria'}}
        ]

    this.adm = new User()
   }

  ngOnInit() {
    this.adms = this.userService.getADMS();
  }

    entrar(adm:User){
   let podeLogar:boolean = false;
   podeLogar = this.userService.ADMExiste(this.adm);
   if(podeLogar){
     this.rota.navigate(["/main/consultas"])
   }else{
     alert("Administrador não encontrado, faça seu cadastro")
   }
 }

}
