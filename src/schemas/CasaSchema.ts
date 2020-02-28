import { model, Schema, Document } from 'mongoose';
import { IEvento } from './EventoSchema';
import EnderecoSchema, { IEndereco } from './EnderecoSchema';
import FotoSchema, { IFoto } from './FotoSchema';

export interface ICasa extends Document {
	eventos: [IEvento['_id']],
	nome: String,
	endereco: IEndereco,
	descricao: String,
	descricao_curta?: String,
	foto_principal?: IFoto,
	fotos?: [IFoto],
}

const CasaSchema: Schema = new Schema(
	{
		eventos: [{
			type: Schema.Types.ObjectId,
			ref: 'Evento',
		}],
		nome: {
			type: String,
			required: [true, 'O campo nome é obrigatorio'],
			minlength: [1, 'O campo nome não pode estar vazio'],
			maxlength: [50, 'O campo nome deve ter no maximo 50 caracteres'],
		},
		endereco: {
			type: EnderecoSchema,
			required: [true, 'O campo endereço é obrigatorio'],
		},
		descricao: {
			type: String,
			required: [true, 'O campo descrição é obrigatorio'],
			minlength: [1, 'O campo descrição não pode estar vazio'],
			maxlength: [560, 'O campo descrição deve ter no maximo 560 caracteres'],
		},
		descricao_curta: {
			type: String,
			minlength: [1, 'O campo descrição curta não pode estar vazio'],
			maxlength: [140, 'O campo descrição deve ter no maximo 140 caracteres'],
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