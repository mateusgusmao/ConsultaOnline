import { Observable } from 'rxjs/Observable';

export interface Consulta {
    //id: number = 0;
    especialidade: string;
    planoSaude: string;
    data: Date;
    status: boolean;
    situacao: string;


    idPaciente?: string; //id do usuarioLogado
    nomePaciente?: string;


    id? : string;
}