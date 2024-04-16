import { useEffect, useState } from "react";
import { getPokemons } from "../loaders/getPokemons";
import { View, StyleSheet, TextInput } from "react-native";
import PokeCard from "./PokeCard";

const ListPokemons = ({ limit, offset }) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons(limit, offset).then((r) => setPokemons(r));
  }, [limit, offset]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchArea}
        placeholder="Type the Pokémon name"
      />
      {pokemons.map((poke, index) => (
        <View key={index} stytle={styles.container}>
          <PokeCard
            id={poke?.id ?? 0}
            types={poke?.types}
            name={poke?.name ?? "..."}
            img={{
              url: poke?.sprites.front_default,
              gif: poke?.sprites.other.showdown.front_default,
            }}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexPosition: "column",
    width: "full",
    justifyContent: "center",
    gap: 8,
  },
  searchArea:{
    width: 'full',
    height: '5Vh',
    paddingHorizontal: 10,
    marginVertical: 15
  },
  item: {
    width: "full",
    display: "flex",
    justifyContent: "center",
  },
});

export default ListPokemons;
