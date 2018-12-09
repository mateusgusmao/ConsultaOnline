import { Observable } from '../../../node_modules/rxjs';

export interface Medico{
   username: string;
   turno: string;
   sexo: string;

  idEspecialidade?;
  nomeEspecialidade?;

   id?: String;
}