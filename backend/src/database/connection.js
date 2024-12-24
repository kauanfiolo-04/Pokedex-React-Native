import {config} from 'dotenv';
import mysql from 'mysql2';

config();

const connection = mysql.createConnection({
  host: process.env.HOST ?? 'localhost',
  port: process.env.PORT ?? 3306,
  user: process.env.USER ?? 'root',
  password: process.env.PASSWORD ?? 'root',
  database: process.env.DATABASE ?? 'favorited_pokemons'
});

export default connection;