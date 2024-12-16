import { DataTypes } from 'sequelize';
import database from './db';

const Pokemon = database.define('Poke', 
  { 
    Id: { type: DataTypes.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    pokeId: { type: DataTypes.STRING, allowNull: false },
    pokeName: { type: DataTypes.STRING, allowNull: false },
    pokeTypes: { type: DataTypes.ARRAY(DataTypes.STRING)}
  }
);

export default Pokemon;