import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

class BancoDeDados {

	private connectionUrl: string = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@${process.env.db_cluster}.${process.env.db_host}/${process.env.db_database}?retryWrites=true&w=majority`;

	conectar(options?: mongoose.ConnectionOptions | undefined): void {

		if (options !== undefined) {
			options!.useNewUrlParser = true;
			options!.useUnifiedTopology = true;
		} else {
			options = {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			};
		}

		mongoose.connect(
			this.connectionUrl,
			options,
		).then(() => {
			console.log('conectado');
		});
	}
}

export default new BancoDeDados();