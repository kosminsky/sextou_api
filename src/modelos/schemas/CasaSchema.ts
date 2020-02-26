import { Schema, model } from 'mongoose';

const CasaSchema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Casa', CasaSchema);