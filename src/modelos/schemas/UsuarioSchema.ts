import { Schema, model } from 'mongoose';

const UsuarioSchema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Usuario', UsuarioSchema);