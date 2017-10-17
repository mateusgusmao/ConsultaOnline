import { Component, OnInit } from '@angular/core';
import { Consulta } from '../models/consulta';
import { ConsultasService } from '../consultas.service';
import {TabMenuModule, MenuItem} from 'primeng/primeng';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}