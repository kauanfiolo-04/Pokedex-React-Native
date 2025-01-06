import connection from '../database/connection';

class UserModel {
  getUsers() {
    const sql = `SELECT * FROM users;`;

    return new Promise((resolve, reject) => {
      connection.query(sql, {}, (err, res) => {
        if (err) {
          console.error('Deu erro no listar...', err);
          return reject(new Error(err));
        }

        return resolve(res);
      });
    });
  }
}

export default new UserModel();