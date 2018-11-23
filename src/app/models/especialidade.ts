import { Medico } from './medico';
import { Observable } from '../../../node_modules/rxjs';

export interface Especialidade{
    medicos: Medico[];
    tipo: String;

    id?: String;
} 