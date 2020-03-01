import { Document } from 'mongoose';

export default interface IEndereco extends Document {
	latitude: String,
	longitude: String,
	rua: String,
	numero: String,
	complemento?: String,
	cep: String,
	bairro: String,
	cidade: String,
	estado: String,
}