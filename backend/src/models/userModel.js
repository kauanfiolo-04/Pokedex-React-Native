import { v4 as uuidv4 } from 'uuid';
import connection from '../database/connection.js';

class UserModel {
  getUsers() {
    const sql = `SELECT * FROM users;`;

    return new Promise((resolve, reject) => {
      connection.query(sql, {}, (err, res) => {
        if (err) {
          console.error('Deu erro no listar...', err);
          return reject(new Error(err));
        }

        return resolve(res.map(user => (({ password, ...rest }) => rest)(user)));
      });
    });
  }

  post(userParams) {
    const sql = `INSERT INTO users SET ?`;

    const user = { id: uuidv4(), ...userParams };

    return new Promise((resolve, reject) => {
      connection.query(sql, user, (err, res) => {
        if (err) {
          console.error('Erro ao criar usuário!', err);
          return reject(new Error(err));
        }

        console.log('Usuário criado com sucesso!');
        return resolve({user});
      });
    });
  }

}

export default new UserModel();