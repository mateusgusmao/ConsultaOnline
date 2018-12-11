import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router, Route } from '@angular/router';
import { PanelModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { AdmService } from '../adm.service';
import { TabMenuModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { ADM } from '../models/adm'
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form-adm',
  templateUrl: './form-adm.component.html',
  styleUrls: ['./form-adm.component.css']
})
export class FormAdmComponent implements OnInit {

  adm: ADM;
  userADM: string;
  senhaADM: string;

  msgs: Message[] = [];

  constructor(private admService: AdmService, private rota: Router) {
  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Usuário/Senha inválido', detail: 'Verique as credenciais e tente novamente.' });
  }

  login(user, senha) {
    user = this.userADM;
    senha = this.senhaADM;

    this.admService.loginADM(user, senha).subscribe(meuObservable => {
      if (meuObservable == null) {
        this.showError();
      } else {
        this.rota.navigate(['/adm-menu']);
        this.admService.loginADM(user, senha).subscribe(meuObservable => {
          this.admService.admLogado = meuObservable as ADM
          console.log("Administrador Logado: " + this.admService.admLogado.username)
        })
      }
    });
  }

  ngOnInit() {

  }

}
