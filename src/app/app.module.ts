import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { MarcarComponent } from './marcar/marcar.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';
import { ListarUsersComponent } from './listar-users/listar-users.component';
import { SobreComponent } from './sobre/sobre.component';

import { FirebaseConfig } from "../environments/firebase.config";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireModule } from 'angularfire2';

import {rota} from './app.rotas';

import {UserService} from './user.service';
import {ConsultasService} from './consultas.service'

import {Message} from 'primeng/components/common/api';
import {RadioButtonModule} from 'primeng/primeng';
import {MessagesModule} from 'primeng/primeng';
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
import {MenubarModule} from 'primeng/primeng';
import {ContextMenuModule} from 'primeng/primeng';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import {PanelModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormularioCadastroComponent,
    ConsultasComponent,
    MarcarComponent,
    TelaPrincipalComponent,
    EditarConsultaComponent,
    ListarUsersComponent,
    SobreComponent,

    
    
  ],
  imports: [
    AngularFireModule.initializeApp(FirebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
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
    RadioButtonModule,
    MessagesModule,
    ContextMenuModule,
    PanelModule


  ],
  providers: [UserService, ConsultasService, AngularFireAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
