import { Schema, model } from 'mongoose';

const AdministradorSchema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Administrador', AdministradorSchema);