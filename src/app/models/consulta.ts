import { Observable } from 'rxjs/Observable';

export interface Consulta {
    //id: number = 0;
    especialidade: string;
    planoSaude: string;
    data: Date;
    status: boolean;

    usuarioconsulta: string; //id do usuarioLogado

    id? : string;
}