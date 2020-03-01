import { Document } from 'mongoose';
import IEvento from './IEvento';
import IEndereco from './IEndereco';
import IFoto from './IFoto';

export default interface ICasa extends Document {
	eventos: [IEvento['_id']],
	nome: String,
	endereco: IEndereco,
	descricao: String,
	descricao_curta?: String,
	foto_principal?: IFoto,
	fotos?: [IFoto],
}