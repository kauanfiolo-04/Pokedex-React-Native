import pokemonModel from "../models/pokemonModel.js";

class PokemonController {
  getAll() {
    return pokemonModel.getAll();
  }

  post(poke) {
    return pokemonModel.post(poke);
  }

  put(poke) {
    return pokemonModel.put(poke);
  }

  delete(id) {
    return 'Apagando pokemon de id: ' + id;
  }

  getFavorited(pokeId) {
    return pokemonModel.getFavorited(pokeId);
  }
}

export default new PokemonController();