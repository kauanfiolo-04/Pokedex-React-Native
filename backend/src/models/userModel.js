import { v4 as uuidv4 } from 'uuid';
import connection from '../database/connection.js';

class UserModel {
  getUsers() {
    const sql = `SELECT * FROM users`;

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

  getUser(userId) {
    const sql = `SELECT * FROM users WHERE id = ?`;

    return new Promise((resolve, reject) => {
      connection.query(sql, userId, (err, res) => {
        if (err) {
          console.error('Erro ao buscar usuário!', err);
          return reject(new Error(err));
        }

        return resolve(res.map(user => (({ created_at, ...rest }) => rest)(user)));
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
        return resolve({ user });
      });
    });
  }

  put(userParams, userId) {
    const sql = `UPDATE users SET ? WHERE id = ?`;

    return new Promise((resolve, reject) => {
      connection.query(sql, [userParams, userId], (err,res) => {
        if (err) {
          console.error('Erro ao editar usuário!', err);
          return reject(new Error(err));
        }

        console.log('Usuário editado com sucesso!');
        return resolve({id: userId, ...userParams});
      });
    });
  }

  delete(userId) {
    const sql = `DELETE FROM users WHERE id = ?`;
    
    return new Promise((resolve, reject) => {
      connection.query(sql, userId, (err,res) => {
        if (err) {
          console.error('Erro ao deletar usuário!', err);
          return reject(new Error(err));
        }

        if (res.affectedRows > 0) {
          console.log('User excluído com sucesso.');
          return resolve({ deleted: true });
        } else {
          console.log('User não encontrado.');
          return resolve({ deleted: false });
        }
      });
    });
  }
}

export default new UserModel();