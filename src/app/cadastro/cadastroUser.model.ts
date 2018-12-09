import { Horta } from "../cadastro-horta/cadastroHorta.model";

export class CadastroUser {
    id: number
    nome: string
    sobrenome: string
    cpf: number
    email: string
    senha: string
    endereco: string
    numero: number
    telefone: number
    cidade: string
    estado: string
    hortas: Horta[]
}