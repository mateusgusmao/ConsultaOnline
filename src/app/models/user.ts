import { Consulta } from './consulta'

export interface User{
    username: string;
    password: string;
    nome: string;
    cpf: string;
    //consultas: Consulta[];
    
    id?: string;
}