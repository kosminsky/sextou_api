import { model, Schema, Document } from 'mongoose';

export interface IFoto extends Document {
	link: String,
	alt: String,
}

const FotoSchema: Schema = new Schema(
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