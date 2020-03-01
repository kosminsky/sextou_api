import { model, Schema } from 'mongoose';
import IAdministrador from '../interfaces/models/IAdministrador';

const Administrador: Schema<IAdministrador> = new Schema(
	{
		casas: [{
			type: Schema.Types.ObjectId,
			ref: 'Casa',
		}],
		nome: {
			type: String,
			required: [true, 'O campo nome é obrigatorio'],
			minlength: [1, 'O campo nome não pode estar vazio'],
			maxlength: [255, 'O campo nome deve ter no maximo 255 caracteres'],
		},
		email: {
			type: String,
			required: [true, 'O campo email é obrigatorio'],
			unique: [true, 'Esse email ja esta cadastrado'],
			validate: {
				validator: function (nome: string) {
					return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(nome);
				},
				message: 'Esse email não é valido'
			}
		},
		senha: {
			type: String,
			required: [true, 'O campo senha é obrigatorio'],
			maxlength: [255, 'A senha deve ser salva em hash, ocupando no maximo 255 caracteres'],
		},
		idade: {
			type: Number,
			required: [true, 'O campo idade é obrigatorio'],
			validate: {
				validator: Number.isInteger,
				message: 'Idade não pode ser um numero decimal'
			}
		},
		genero: {
			type: String,
			required: [true, 'O campo genero é obrigatorio'],
			enum: {
				values: ['Masculino', 'Feminino', 'Outro', 'Não informado'],
				message: 'As opções disponiveis são: Masculino, Feminino, Outro, Não informado'
			},
		},
	},
	{
		timestamps: true,
	}
);

export default model<IAdministrador>('Administrador', Administrador);