import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-visualizar-user',
  templateUrl: './visualizar-user.component.html',
  styleUrls: ['./visualizar-user.component.css']
})
export class VisualizarUserComponent implements OnInit {
  user;
  constructor(private rota: ActivatedRoute,
              private userService:UserService) { }

  ngOnInit() {
          this.rota.params.subscribe(params => {
       let userId = params['id']; // (+) converts string 'id' to a number
       this.userService.listarPorId(userId).subscribe(result=>{
          this.user = result;
        });
      
    });
  }

}
