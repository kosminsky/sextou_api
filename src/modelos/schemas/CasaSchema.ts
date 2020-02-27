import { model, Schema, Document } from 'mongoose';
import { IEvento } from './EventoSchema';
import EnderecoSchema, { IEndereco } from './EnderecoSchema';
import FotoSchema, { IFoto } from './FotoSchema';

export interface ICasa extends Document {
	eventos: [IEvento['_id']],
	nome: String,
	endereco: IEndereco,
	descricao: String,
	descricao_curta: String,
	foto_principal: IFoto,
	fotos: [IFoto],
}

const CasaSchema: Schema = new Schema(
	{
		eventos: [{
			type: Schema.Types.ObjectId,
			ref: 'Evento',
		}],
		nome: {
			type: String,
			required: true,
		},
		endereco: {
			type: EnderecoSchema,
			required: true,
		},
		descricao: {
			type: String,
			required: true,
		},
		descricao_curta: {
			type: String,
		},
		foto_principal: {
			type: FotoSchema,
		},
		fotos: [FotoSchema],
	},
	{
		timestamps: true,
	}
);

export default model('Casa', CasaSchema);