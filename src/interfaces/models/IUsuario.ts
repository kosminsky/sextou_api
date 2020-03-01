import { Document } from 'mongoose';
import IEvento from './IEvento';
import ICasa from './ICasa';

export default interface IUsuario extends Document {
	eventos_agendados: [IEvento['_id']],
	casas_favoritas: [ICasa['_id']],
	nome: String,
	email: String,
	senha: String,
	idade: Number,
	genero: 'Masculino' | 'Feminino' | 'Outro' | 'Não informado',
}