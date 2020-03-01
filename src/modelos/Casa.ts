import { model, Schema } from 'mongoose';
import ICasa from '../interfaces/modelos/ICasa';
import SchemaFoto from '../schemas/ScheemaFoto';
import EnderecoSchema from '../schemas/SchemaEndereco';

const Casa: Schema<ICasa> = new Schema(
	{
		eventos: [{
			type: Schema.Types.ObjectId,
			ref: 'Evento',
		}],
		nome: {
			type: String,
			required: [true, 'O campo nome é obrigatorio'],
			minlength: [1, 'O campo nome não pode estar vazio'],
			maxlength: [50, 'O campo nome deve ter no maximo 50 caracteres'],
		},
		endereco: {
			type: EnderecoSchema,
			required: [true, 'O campo endereço é obrigatorio'],
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
			type: SchemaFoto,
		},
		fotos: [SchemaFoto],
	},
	{
		timestamps: true,
	}
);

export default model<ICasa>('Casa', Casa);