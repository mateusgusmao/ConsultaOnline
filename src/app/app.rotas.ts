import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { MarcarComponent } from './marcar/marcar.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ListarUsersComponent } from './listar-users/listar-users.component';
import {Routes,RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { SobreComponent } from './sobre/sobre.component';


const APP_ROTAS:Routes = [
  
  {path: 'login', component: FormularioComponent},
  {path: 'cadastro', component: FormularioCadastroComponent},  
  {path: '', component: FormularioComponent},
  {path: 'main', component: TelaPrincipalComponent,
   children: [
    {path: 'sobre', component: SobreComponent},
    {path: 'consultas', component: ConsultasComponent},
    {path: 'marcar-consulta', component: MarcarComponent},
    {path: 'editar-consulta/:id', component: EditarConsultaComponent},
    {path:'listar-users', component:ListarUsersComponent}

    ]  
  }
]
export const rota: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);