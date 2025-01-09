import { useState, useCallback } from "react";
import { View, Text } from "react-native";
import getFavorites from "loaders/getFavorites"
import getPokemon from "loaders/getPokemon"
import ListPokemons from "components/ListPokemons";
import { useUserContext } from "../context/UserContext";
import { useFocusEffect } from "@react-navigation/native";

function FavouritedScreen() {
  const [pokemons, setPokemons] = useState([]);
  const {user} = useUserContext();
  
  const fetchFiltered = async () => {
    setPokemons([]);
    const data = await getFavorites(user.id);
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
  
  useFocusEffect(
    useCallback(() => {
      console.log('Renderizou')
      fetchFiltered();
    }, [])
  );

  return (
    <View>
      <ListPokemons pokemons={pokemons} />
    </View>
  );
}

export default FavouritedScreen;