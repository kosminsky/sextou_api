import { Schema, model } from 'mongoose';

const EventoScheema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Evento', EventoScheema);