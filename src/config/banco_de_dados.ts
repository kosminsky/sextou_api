import dotenv from 'dotenv';

dotenv.config();

const connectionUrl: string = `mongodb+srv://${process.env.db_user}:${process.env.db_password}@${process.env.db_cluster}.${process.env.db_host}/${process.env.db_database}?retryWrites=true&w=majority`;

export default connectionUrl;