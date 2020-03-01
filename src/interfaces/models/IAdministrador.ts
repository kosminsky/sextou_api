import { Document } from 'mongoose';
import ICasa from "./ICasa";

export default interface IAdministrador extends Document {
	casas: [ICasa['_id']],
	nome: String,
	email: String,
	senha: String,
	idade: Number,
	genero: 'Masculino' | 'Feminino' | 'Outro' | 'Não informado',
}