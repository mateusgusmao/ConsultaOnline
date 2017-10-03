import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomepageComponent } from "./homepage/homepage.component";
import { ConsultasComponent } from './consultas/consultas.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


const APP_ROTAS:Routes = [
  {path: 'consultas', component: ConsultasComponent},
  {path: 'login', component: FormularioComponent},
  {path: 'cadastro', component: FormularioCadastroComponent},
  {path: 'homepage', component: HomepageComponent}  
]
export const rota: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);