import { Observable } from 'rxjs/Observable';

export interface Consulta {
    //id: number = 0;
    especialidade: string;
    planoSaude: string;
    data: string;
    turno: string;

    status: boolean;
    situacao: string;

    
    horario?: string;
    idPaciente?: string; //id do usuarioLogado
    nomePaciente?: string;
    nomeMedico?: string;


    id? : string;
}