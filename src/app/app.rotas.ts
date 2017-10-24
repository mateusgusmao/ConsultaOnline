import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { MarcarComponent } from './marcar/marcar.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


const APP_ROTAS:Routes = [
  
  {path: 'login', component: FormularioComponent},
  {path: 'cadastro', component: FormularioCadastroComponent},  
  {path: '', component: FormularioComponent},
  {path: 'main', component: TelaPrincipalComponent,
   children: [
    {path: 'consultas', component: ConsultasComponent},
    {path: 'marcar-consulta', component: MarcarComponent}
    ]  
  }
]
export const rota: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);