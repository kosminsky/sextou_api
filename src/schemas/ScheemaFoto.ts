import { Schema } from 'mongoose';
import IFoto from '../interfaces/modelos/IFoto';

const Foto: Schema<IFoto> = new Schema(
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

export default Foto;