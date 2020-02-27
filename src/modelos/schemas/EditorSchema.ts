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

	},
	{
		timestamps: true,
	}
);

export default model('Editor', EditorScheema);