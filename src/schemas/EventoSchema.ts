import { Schema, model, Document } from 'mongoose';
import { ICategoria } from './CategoriaSchema';
import FotoSchema, { IFoto } from './FotoSchema';
import { ICasa } from './CasaSchema';

export interface IEvento extends Document {
	casa: [ICasa['_id']],
	categorias: [ICategoria['_id']],
	nome: String,
	data: Date,
	descricao: String,
	descricao_curta?: String,
	foto_principal?: IFoto,
	fotos?: [IFoto],
}

const EventoScheema: Schema = new Schema(
	{
		casa: {
			type: Schema.Types.ObjectId,
			ref: 'Casa',
		},
		categorias: [{
			type: Schema.Types.ObjectId,
			ref: 'Categoria',
		}],
		nome: {
			type: String,
			required: [true, 'O campo nome é obrigatorio'],
			minlength: [1, 'O campo nome não pode estar vazio'],
			maxlength: [255, 'O campo nome deve ter no maximo 255 caracteres'],
		},
		data: {
			type: Date,
			required: [true, 'O campo data é obrigatorio'],
			validate: {
				validator: (date: Date) => date.getTime() <= new Date().getTime(),
				message: 'A data deve ser maior que a data atual'
			}
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

export default model('Evento', EventoScheema);