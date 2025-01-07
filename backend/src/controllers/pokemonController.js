import pokemonModel from "../models/pokemonModel.js";

class PokemonController {
  getAll() {
    return pokemonModel.getAll();
  }

  post(poke, userId) {
    return pokemonModel.post(poke, userId);
  }

  put(poke, userId) {
    return pokemonModel.put(poke, userId);
  }

  delete(pokeId, userId) {
    return pokemonModel.delete(pokeId, userId);
  }

  getFavorited(pokeId, userId) {
    return pokemonModel.getFavorited(pokeId, userId);
  }
}

export default new PokemonController();