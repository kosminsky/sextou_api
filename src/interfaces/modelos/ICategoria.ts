import { Document } from 'mongoose';

export default interface ICategoria extends Document {
	nome: String,
	descricao: String,
	descricao_curta?: String,
}