import { Document } from 'mongoose';
import ICasa from './ICasa';
import ICategoria from './ICategoria';
import IFoto from './IFoto';

export default interface IEvento extends Document {
	casa: [ICasa['_id']],
	categorias: [ICategoria['_id']],
	nome: String,
	data: Date,
	descricao: String,
	descricao_curta?: String,
	foto_principal?: IFoto,
	fotos?: [IFoto],
}