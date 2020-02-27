import { model, Schema, Document } from 'mongoose';
import { ICasa } from './CasaSchema';

export interface IAdministrador extends Document {
	casas: [ICasa['_id']],
	nome: String,
	email: String,
	senha: String,
	idade: Number,
	genero: 'Masculino' | 'Feminino' | 'Outro' | 'Não informado',
}

const AdministradorSchema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Administrador', AdministradorSchema);