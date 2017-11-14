import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { MarcarComponent } from './marcar/marcar.component';
import {rota} from './app.rotas';

import {UserService} from './user.service';
import {ConsultasService} from './consultas.service'

import {RadioButtonModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {AccordionModule} from 'primeng/primeng';
import {MenuItem} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {PasswordModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputMaskModule} from 'primeng/primeng';
import {PanelMenuModule} from 'primeng/primeng';
import {TabMenuModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import { ConsultasComponent } from './consultas/consultas.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';





@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioCadastroComponent,
    ConsultasComponent,
    MarcarComponent,
    TelaPrincipalComponent,
    EditarConsultaComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    ButtonModule,
    PasswordModule,
    PanelMenuModule,
    BrowserAnimationsModule,
    rota,
    TabMenuModule,
    CalendarModule,
    FormsModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    RadioButtonModule


  ],
  providers: [UserService,ConsultasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
