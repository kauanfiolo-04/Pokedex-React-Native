import React, { useEffect, useState, useRef } from "react";
import { getPokemons } from "../loaders/getPokemons";
import { View, StyleSheet, TextInput, FlatList } from "react-native";
import PokeCard from "./PokeCard";

const searchMenuBarLoader = async (term, signal)=>{
  const url=`https://pokeapi.co/api/v2/pokemon/${term}`

  return await fetch(url, {signal}).catch(err=>console.error('Error: '+err))
}

const ListPokemons = ({ limit, offset }) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const currentController=useRef(null)


  const fetchData=async ()=>{
    currentController.current = new AbortController()
    try {
      const valueInputed=finalInputValue.current
      const poke = await searchMenuBarLoader(valueInputed, currentController.current.signal)

      setPokemons([poke])
      currentController.current = null // Limpa a referência após a conclusão
    } catch (error) {
        // Verificar se o erro é um erro de aborto
        if (error.name === 'AbortError') {
            console.log('Fetch foi cancelado')
        } else {
            console.error(error)
        }
    }
  }

  useEffect(() => {
    getPokemons(limit, offset).then((r) => setPokemons(r));
  }, [limit, offset]);

  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <PokeCard
        id={item?.id ?? 0}
        types={item?.types}
        name={item?.name ?? "..."}
        img={{
          url: item?.sprites.front_default,
          gif: item?.sprites.other.showdown.front_default,
        }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchArea}
        placeholder="Type the Pokémon name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={filteredPokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 7
  },
  searchArea: {
    /* width: "100%",
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5, */
  },
  list: {
    /* flex: 1, */
    width: "100%",
  },
  item: {
    marginVertical: 5,
  },
});

export default ListPokemons;
