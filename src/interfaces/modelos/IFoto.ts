import { Document } from 'mongoose';

export default interface IFoto extends Document {
	link: String,
	alt: String,
}