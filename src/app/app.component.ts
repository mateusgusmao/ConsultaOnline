import { Component } from '@angular/core';
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
function verificarSpaces(c:AbstractControl){
if (c.value == null) return null;
if (c.value.indexOf(' ') >= 0){
  return {SemSpaces: true}
}
return null;
}

@Directive({
  selector: '[sem-spaces]',
  providers: [
    {provide: NG_VALIDATORS, multi: true, useValue: verificarSpaces}
  ]
})
export class SemSpaces {}
