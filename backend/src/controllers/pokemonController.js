import pokemonModel from "../models/pokemonModel.js";

class PokemonController {
  getAll() {
    return pokemonModel.getAll();
  }

  create() {
    return 'Criando pokemon...';
  }

  put(id) {
    return 'Alterando pokemon de id: ' + id;
  }

  delete(id) {
    return 'Apagando pokemon de id: ' + id;
  }

  getFavorited(id) {
    return `Averiguando se o pokemon de id: ${id}, foi favoritado...`
  }
}

export default new PokemonController();