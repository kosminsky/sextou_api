import { Schema, model, Document } from 'mongoose';
import { ICategoria } from './CategoriaSchema';
import { IFoto } from './FotoSchema';

export interface IEvento extends Document {
	casa: String,
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

	},
	{
		timestamps: true,
	}
);

export default model('Evento', EventoScheema);