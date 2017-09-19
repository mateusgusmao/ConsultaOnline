import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { HomepageComponent } from './homepage/homepage.component';
import {rota} from './app.rotas';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioCadastroComponent,
    HomepageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    ButtonModule,
    PasswordModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    rota

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
