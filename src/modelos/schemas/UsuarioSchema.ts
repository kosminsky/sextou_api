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
		eventos_agendados: [{
			type: Schema.Types.ObjectId,
			ref: 'Evento',
		}],
		casas_favoritas: [{
			type: Schema.Types.ObjectId,
			ref: 'Casa',
		}],
		nome: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		senha: {
			type: String,
			required: true,
		},
		idade: {
			type: String,
			required: true,
		},
		genero: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default model('Usuario', UsuarioSchema);