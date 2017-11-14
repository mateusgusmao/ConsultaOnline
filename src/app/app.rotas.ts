import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { MarcarComponent } from './marcar/marcar.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { AdmCadastroComponent } from './adm-cadastro/adm-cadastro.component';
import { AdmLoginComponent } from './adm-login/adm-login.component';
import { GerenciarConsultasComponent } from './gerenciar-consultas/gerenciar-consultas.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


const APP_ROTAS:Routes = [
  
  {path: 'login', component: FormularioComponent},
  {path: 'cadastro', component: FormularioCadastroComponent},  
  {path: '', component: FormularioComponent},
  {path: 'adm-cadastro', component: AdmCadastroComponent},
  {path: 'adm-login', component: AdmLoginComponent},
  {path: 'main', component: TelaPrincipalComponent,
   children: [
    {path: 'consultas', component: ConsultasComponent},
    {path: 'marcar-consulta', component: MarcarComponent},
    {path: 'editar-consulta/:id', component: EditarConsultaComponent},
    {path: 'gerenciar-consultas', component: GerenciarConsultasComponent}

    ]  
  }
]
export const rota: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);