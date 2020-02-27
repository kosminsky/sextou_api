import { model, Schema, Document } from 'mongoose';

export interface IEndereco extends Document {
	latitude: String,
	longitude: String,
	rua: String,
	numero: String,
	complemento: String,
	bairro: String,
	cidade: String,
	estado: String,
}

const EnderecoSchema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Endereco', EnderecoSchema);