import { model, Schema, Document } from 'mongoose';

export interface IFoto extends Document {
	link: String,
	alt: String,
}

const FotoSchema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Foto', FotoSchema);