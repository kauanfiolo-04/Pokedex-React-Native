import {config} from 'dotenv';
import mysql from 'mysql2';

config();

const urlDB = process.env.DATABASE_URL;

// `mysql://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}:${process.env.PORT}/${process.env.DATABASE}`;

console.log(urlDB);

const connection = mysql.createConnection(urlDB);

export default connection;