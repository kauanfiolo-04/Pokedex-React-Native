class Tables {
  init(connection) {
    this.connection = connection;
    this.createTablePokemons();
  }

  createTablePokemons() {
    const sql = `
      CREATE TABLE IF NOT EXISTS pokemons (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
          pokeId VARCHAR(10),
          pokeName VARCHAR(255),
          pokeTypes TEXT
      );
    `;

    this.connection.query(sql, (error) => {
      if(error) {
        console.log('Erro pra criar tabela pokemons')
        console.error(error.message);
        return;
      }
      console.log('Tabela criada');
    })
  }
}

export default new Tables();