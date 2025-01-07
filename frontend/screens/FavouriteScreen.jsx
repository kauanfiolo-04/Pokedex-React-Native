import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import getFavorites from "../loaders/getFavorites"
import getPokemon from "../loaders/getPokemon"
import ListPokemons from "../components/ListPokemons";

function FavouritedScreen() {
  const [pokemons, setPokemons] = useState([]);
  
  const fetchFiltered = async () => {
    setPokemons([]);
    const data = await getFavorites();
    console.log(data);
    if (data) {
      const pokeCards = [];
      for (const poke of data) {
        const pokeCard = await getPokemon(poke.pokeId);
        pokeCards.push(pokeCard);
      }
      setPokemons(pokeCards);
    }else{
      setDisablePagination(false);
      setPokemons(standardPokes.current);
    }
  };
  
  useEffect(() => {
    fetchFiltered();
  }, []);

  return (
    <View>
      <ListPokemons pokemons={pokemons} />
    </View>
  );
}

export default FavouritedScreen;