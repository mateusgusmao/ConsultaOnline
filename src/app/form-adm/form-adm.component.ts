import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router, Route } from '@angular/router';
import { PanelModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';
import { MenuItem } from 'primeng/primeng';
import { UserService } from '../user.service';
import { TabMenuModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { Message } from 'primeng/primeng';
import { User } from '../models/user'
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-form-adm',
  templateUrl: './form-adm.component.html',
  styleUrls: ['./form-adm.component.css']
})
export class FormAdmComponent implements OnInit {
  
      constructor() {}
  
      ngOnInit() {
      }

}
