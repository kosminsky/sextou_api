import { model, Schema, Document } from 'mongoose';
import { ICasa } from './CasaSchema';

interface IEditor extends Document {
	casas: [ICasa['_id']],
	nome: String,
	email: String,
	senha: String,
	idade: Number,
	genero: 'Masculino' | 'Feminino' | 'Outro' | 'Não informado',
}

const EditorScheema: Schema = new Schema(
	{
		casas: [{
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

export default model('Editor', EditorScheema);