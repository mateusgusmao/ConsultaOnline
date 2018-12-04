import { FormularioCadastroComponent } from './formulario-cadastro/formulario-cadastro.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ConsultasComponent } from './consultas/consultas.component';
import { MarcarComponent } from './marcar/marcar.component';
import { EditarConsultaComponent } from './editar-consulta/editar-consulta.component';
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { ListarUsersComponent } from './listar-users/listar-users.component';
import { SobreComponent } from './sobre/sobre.component';
import { FormAdmComponent } from './form-adm/form-adm.component';
import { HomeComponent } from './home/home.component';
import { PacienteComponent } from './paciente/paciente.component';
import { MenuAdmComponent } from './menu-adm/menu-adm.component';
import { GerenciarComponent } from './gerenciar/gerenciar.component'
import { EspecialidadeComponent } from './especialidade/especialidade.component';
import { MedicoComponent } from './medico/medico.component';
import { ListarEspecialidadesComponent } from './listar-especialidades/listar-especialidades.component';


import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders, Component } from '@angular/core';
import { SairComponent } from './sair/sair.component';
import { ListarConsultasComponent } from './listar-consultas/listar-consultas.component';



const APP_ROTAS: Routes = [

  { path: 'login', component: FormularioComponent },
  { path: 'cadastro', component: FormularioCadastroComponent },
  { path: '', component: FormularioComponent },
  {
    path: 'main', component: TelaPrincipalComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'paciente', component: PacienteComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'consultas', component: ConsultasComponent },
      { path: 'marcar-consulta', component: MarcarComponent },
      { path: 'editar-consulta/:id', component: EditarConsultaComponent },
      { path: 'sair', component: SairComponent}
    ]
  },
  { path: 'adm-login', component: FormAdmComponent },
  { path: 'adm-menu', component: MenuAdmComponent,
    children: [
      { path: 'listar-users', component: ListarUsersComponent },
      { path: 'listar-consultas', component: ListarConsultasComponent},
      { path: 'listar-esp', component: ListarEspecialidadesComponent},
      { path: 'gerenciar', component: GerenciarComponent },
      { path : 'especialidade', component: EspecialidadeComponent },
      { path: 'medico', component: MedicoComponent}
    ]
  }
]
export const rota: ModuleWithProviders = RouterModule.forRoot(APP_ROTAS);