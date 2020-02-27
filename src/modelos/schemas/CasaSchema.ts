import { model, Schema, Document } from 'mongoose';
import { IEvento } from './EventoSchema';
import { IEndereco } from './EnderecoSchema';
import { IFoto } from './FotoSchema';

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

	},
	{
		timestamps: true,
	}
);

export default model('Casa', CasaSchema);