import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gerenciar',
  templateUrl: './gerenciar.component.html',
  styleUrls: ['./gerenciar.component.css']
})
export class GerenciarComponent implements OnInit {

  constructor(private rota: Router) { }

  ngOnInit() {


  }

  /*irParaMarcarEspecialidade(){
    this.rota.navigate(['../especialidade']);
  }*/

}
