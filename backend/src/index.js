import express from 'express';
import cors from 'cors';
import routes from './routers/routes.js';
import connection from './database/connection.js';
import Tables from './database/Tables.js';

const app = express();

app.use(express.json());

app.use(cors({
  origin: '*',  // Permite todas as origens
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

const port = 3000;

Tables.init(connection);

routes(app);

app.listen(port, (error) => {
  if(error){
    console.error(error);
    return;
  }

  console.log(`Rodando no: http://localhost:${port}`);
});