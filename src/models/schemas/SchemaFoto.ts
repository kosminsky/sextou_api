import { Schema } from 'mongoose';
import IFoto from '../../interfaces/models/IFoto';

const FotoSchema: Schema<IFoto> = new Schema(
	{
		link: {
			type: String,
			required: [true, 'o campo foto.link é obrigatorio']
		},
		alt: {
			type: String,
			required: [true, 'o campo foto.alt é obrigatorio']
		},
	},
	{
		timestamps: true,
	}
);

export default FotoSchema;