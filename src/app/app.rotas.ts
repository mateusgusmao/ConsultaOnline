import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HomepageComponent } from "./homepage/homepage.component";
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


const APP_ROTAS:Routes = [
  {path: 'formulario', component: FormularioComponent},
  {path: 'formulario-cadastro', component: FormularioCadastroComponent},
  {path: 'homepage', component: HomepageComponent}  
]
export const rota: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);