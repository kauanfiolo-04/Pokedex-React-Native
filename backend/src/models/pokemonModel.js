import connection from '../database/connection.js';

class PokemonModel {
  getAll() {
    const sql = `SELECT * FROM pokemons;`;

    return new Promise((resolve, reject) => {
      connection.query(sql, {}, (err, res) => {
        if (err) {
          console.error('Deu erro no listar...', err);
          reject(err);
        }
  
        console.log('Show...');
        resolve(res);
      })
    });
  }

  getFavorited(pokeId) {
    const sql = `SELECT * FROM pokemons WHERE pokeId = ?`;
  
    return new Promise((resolve, reject) => {
      connection.query(sql, [pokeId], (err, res) => {
        if (err) {
          console.error('Erro ao buscar Pokémon:', err);
          reject(err);
        }
  
        resolve(res.length);
      });
    });
  }

  post(poke) {
    const { pokeTypes } = poke;
    const sql = `INSERT INTO pokemons SET ?`;
  
    return new Promise((resolve, reject) => {
      connection.query(sql, { ...poke, pokeTypes: JSON.stringify(pokeTypes) }, (err, res) => {
        if (err) {
          console.error('Erro ao inserir Pokémon:', err);
          reject(err);
        }
  
        console.log('Pokémon inserido com sucesso.');
        // Retorna o ID inserido e os dados do Pokémon
        resolve({ id: res.insertId, ...poke });
      });
    });
  }

  put(poke) {
    const { pokeId, pokeTypes } = poke;
    const sql = `UPDATE pokemons SET ? WHERE pokeId = ?`;
  
    return new Promise((resolve, reject) => {
      connection.query(sql, [{ ...poke, pokeTypes: JSON.stringify(pokeTypes) }, pokeId], (err, res) => {
        if (err) {
          console.error('Erro ao atualizar Pokémon:', err);
          reject(err);
        }
  
        if (res.affectedRows > 0) {
          console.log('Pokémon atualizado com sucesso.');
          resolve({ updated: true, ...poke });
        } else {
          console.error('Nenhuma registro foi alterado');
          reject({ updated: false, ...poke });
        }
      });
    });
  }
}

export default new PokemonModel();