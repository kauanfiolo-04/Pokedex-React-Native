class Tables {
  init(connection) {
    this.connection = connection;
    this.createTableUsers();
    this.createTablePokemons();
  }

  createTableUsers() {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(36) PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        email VARCHAR(100) NOT NULl UNIQUE,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    this.connection.query(sql, (error) => {
      if(error) {
        console.log('Erro pra criar tabela pokemons');
        console.error(error.message);
        return;
      }
      console.log('Tabela users criada!');
    });
  }

  createTablePokemons() {
    const sql = `
      CREATE TABLE IF NOT EXISTS pokemons (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        pokeId VARCHAR(10),
        pokeName VARCHAR(255),
        pokeTypes JSON,
        userId VARCHAR(36) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE
      );
    `;

    this.connection.query(sql, (error) => {
      if(error) {
        console.log('Erro pra criar tabela pokemons')
        console.error(error.message);
        return;
      }
      console.log('Tabela pokemons criada');
    });
  }
}

export default new Tables();