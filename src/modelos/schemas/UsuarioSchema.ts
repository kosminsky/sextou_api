import { model, Schema, Document } from 'mongoose';
import { IEvento } from './EventoSchema';
import { ICasa } from './CasaSchema';

export interface IUsuario extends Document {
	eventos_agendados: [IEvento['_id']],
	casas_favoritas: [ICasa['_id']],
	nome: String,
	email: String,
	senha: String,
	idade: Number,
	genero: 'Masculino' | 'Feminino' | 'Outro' | 'Não informado',
}

const UsuarioSchema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Usuario', UsuarioSchema);