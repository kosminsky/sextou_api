import { Schema } from 'mongoose';
import IEndereco from '../../interfaces/models/IEndereco';

const EnderecoSchema: Schema<IEndereco> = new Schema(
  {
    latitude: {
      type: String,
      required: [true, 'O campo Endereço.latitude é obrigaorio'],
    },
    longitude: {
      type: String,
      required: [true, 'O campo Endereço.longitude é obrigaorio'],
    },
    rua: {
      type: String,
      required: [true, 'O campo Endereço.rua é obrigaorio'],
    },
    numero: {
      type: String,
      required: [true, 'O campo Endereço.numero é obrigaorio'],
    },
    complemento: {
      type: String,
    },
    cep: {
      type: String,
      required: [true, 'O campo Endereço.cep é obrigaorio'],
    },
    bairro: {
      type: String,
      required: [true, 'O campo Endereço.bairro é obrigaorio'],
    },
    cidade: {
      type: String,
      required: [true, 'O campo Endereço.cidade é obrigaorio'],
    },
    estado: {
      type: String,
      required: [true, 'O campo Endereço.estado é obrigaorio'],
    },
  },
  {
    timestamps: true,
  }
);

export default EnderecoSchema;