import mongoose from 'mongoose';
import connectionUrl from '../config/banco_de_dados';

abstract class BancoDeDados {

	static conectar(options?: mongoose.ConnectionOptions | undefined): void {

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
			connectionUrl,
			options,
		).then(() => {
			console.log('conectado');
		});
	}
}

export default BancoDeDados;