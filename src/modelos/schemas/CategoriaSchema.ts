import { model, Schema, Document } from 'mongoose';

export interface ICategoria extends Document {
	nome: String,
	descricao: String,
	descricao_curta: String,
}

const CategoriaSchema: Schema = new Schema(
	{
		nome: {
			type: String,
			required: true,
		},
		descricao: {
			type: String,
			required: true,
		},
		descricao_curta: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default model('Categoria', CategoriaSchema);