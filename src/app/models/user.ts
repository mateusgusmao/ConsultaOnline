import { Consulta } from './consulta'

export interface User{
    username: string;
    password: string;
    consultas: Consulta[];
    
    id?: string;
}