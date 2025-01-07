import connection from '../database/connection.js';

class PokemonModel {
  getAll(userId) {
    const sql = `SELECT * FROM pokemons WHERE userId = ?`;

    return new Promise((resolve, reject) => {
      connection.query(sql, userId, (err, res) => {
        if (err) {
          console.error('Deu erro no listar...', err);
          return reject(new Error(err));
        }

        return resolve(res);
      });
    });
  }

  getFavorited(pokeId, userId) {
    const sql = `SELECT * FROM pokemons WHERE pokeId = ? AND userId = ?`;
  
    return new Promise((resolve, reject) => {
      connection.query(sql, [pokeId, userId], (err, res) => {
        if (err) {
          console.error('Erro ao buscar Pokémon:', err);
          return reject(new Error(err));
        }
  
        return resolve(res.length > 0);
      });
    });
  }

  post(poke, userId) {
    const sql = `INSERT INTO pokemons SET ?`;
  
    return new Promise((resolve, reject) => {
      connection.query(sql, { ...poke, pokeTypes: JSON.stringify(poke.pokeTypes), userId }, (err, res) => {
        if (err) {
          console.error('Erro ao inserir Pokémon:', err);
          return reject(new Error(err));
        }
      
        console.log('Pokémon inserido com sucesso.');
        // Exlui o userId e created_at na response
        const filteredPokemon = (({ userId, created_at, ...rest }) => rest)(poke);
        
        // Retorna o ID inserido e os dados do user
        return resolve({ id: res.insertId, ...filteredPokemon });
      });    
    });

  }

  put(poke, userId) {
    const { pokeId, pokeTypes } = poke;
    const sql = `UPDATE pokemons SET ? WHERE pokeId = ? AND userId = ?`;
  
    return new Promise((resolve, reject) => {
      connection.query(sql, [{ ...poke, pokeTypes: JSON.stringify(pokeTypes) }, pokeId, userId], (err, res) => {
        if (err) {
          return reject(new Error(err));
        }
  
        if (res.affectedRows > 0) {
          console.log('Pokémon atualizado com sucesso.');
          return resolve({ updated: true, ...poke });
        } else {
          console.error('Nenhum registro foi alterado');
          return reject({ updated: false, ...poke });
        }
      });
    });
  }

  delete(pokeId, userId){
    const sql = `DELETE FROM pokemons WHERE pokeId = ? AND userId = ?`;

    return new Promise((resolve, reject) => {
      connection.query(sql, [pokeId, userId], (err, res) => {
        if (err) {
          console.error('Erro ao deletar pokemon: ', err)
          return reject(new Error(err));
        }

        if (res.affectedRows > 0) {
          console.log('Pokémon excluído com sucesso.');
          return resolve({ deleted: true });
        } else {
          console.log('Pokémon não encontrado.');
          return resolve({ deleted: false });
        }
      });
    });
  }
}             

export default new PokemonModel();