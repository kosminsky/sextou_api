import { model, Schema, Document } from 'mongoose';

export interface ICategoria extends Document {
	nome: String,
	descricao: String,
	descricao_curta?: String,
}

const CategoriaSchema: Schema = new Schema(
	{
		nome: {
			type: String,
			required: [true, 'O campo nome é obrigatorio'],
			minlength: [1, 'O campo nome curta não pode estar vazio'],
			maxlength: [50, 'O campo nome deve ter no maximo 50 caracteres'],
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
	},
	{
		timestamps: true,
	}
);

export default model('Categoria', CategoriaSchema);