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
	descricao_curta: String,
	foto_principal: IFoto,
	fotos: [IFoto],
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
			required: true,
		},
		data: Date,
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

export default model('Evento', EventoScheema);