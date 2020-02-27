import { model, Schema, Document } from 'mongoose';

export interface ICategoria extends Document {
	nome: String,
	descricao: String,
	descricao_curta: String,
}

const CategoriaSchema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Categoria', CategoriaSchema);