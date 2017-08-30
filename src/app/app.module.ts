import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';




@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioCadastroComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    ButtonModule,
    PasswordModule,
    InputTextModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
