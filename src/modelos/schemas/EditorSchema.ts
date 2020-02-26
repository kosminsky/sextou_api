import { Schema, model } from 'mongoose';

const EditorScheema: Schema = new Schema(
	{

	},
	{
		timestamps: true,
	}
);

export default model('Editor', EditorScheema);