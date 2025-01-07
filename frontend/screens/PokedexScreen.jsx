import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TextInput, Button, Text, TouchableOpacity, Image} from "react-native";
import getPokemons from "loaders/getPokemons";
import getPokemon from "loaders/getPokemon";
import searchMenuBarLoader from "loaders/searchBarLoader";
import getFavorites from "loaders/getFavorites";
import Svg, { Path } from "react-native-svg";
import ListPokemons from "../components/ListPokemons";

const Pagination = ({ pagination, disable, paginationRef, handlePrev, handleNext }) => (
  <View
    style={{
      ...styles.paginationContainer,
      display: disable ? "none" : "flex",
    }}
    ref={paginationRef}
  >
    <Button title="prev" onPress={handlePrev} />
    <Text>{pagination + 1}</Text>
    <Button title="next" onPress={handleNext} />
  </View>
);

const PokedexScreen = ({ Limit, Offset }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(Limit);
  const [offset, setOffset] = useState(Offset);
  const [pagination, setPagination] = useState(0);
  const [disablePagination, setDisablePagination] = useState(false);
  const [filtered, setFiltered] = useState(false);

  const currentController = useRef(null);
  const standardPokes = useRef(null);
  const paginationRef = useRef(null);

  const fetchData = async (valueInputed) => {
    currentController.current = new AbortController();

    try {
      const poke = await searchMenuBarLoader(
        valueInputed,
        currentController.current.signal
      );
      if (poke !== "vazio") {
        setPokemons([poke]);
        setDisablePagination(true);
      } else {
        setPokemons(standardPokes.current);
        setDisablePagination(false);
      }
      currentController.current = null;
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch foi cancelado");
      } else {
        console.error(error);
      }
    }
  };

  const fetchFiltered = async () => {
    setPokemons([]);
    setDisablePagination(true);
    const data = await getFavorites();
    console.log(data);
    if (data) {
      const pokeCards = [];
      for (const poke of data) {
        const pokeCard = await getPokemon(poke.pokeId);
        pokeCards.push(pokeCard);
      }
      setPokemons(pokeCards);
      setFiltered(true);
    }else{
      setDisablePagination(false);
      setPokemons(standardPokes.current);
    }
  };

  const handlePrev = (event) => {
    event.preventDefault();
    setPagination((prevState) => prevState - 1);
  };

  const handleNext = (event) => {
    event.preventDefault();
    setPagination((prevState) => prevState + 1);
  };

  const handleFilter = (event) => {
    event.preventDefault();
    if(filtered){
      setPokemons(standardPokes.current);
      setDisablePagination(false);
      setFiltered(false);
    }else{
      fetchFiltered();
    }
  };

  useEffect(() => {
    setPokemons([]);
    getPokemons(limit, offset).then((r) => {
      setPokemons(r);
      if (standardPokes.current === null) standardPokes.current = r;
    });
  }, [limit, offset]);

  useEffect(() => {
    setOffset(pagination * 20);
  }, [pagination]);

  useEffect(() => {
    search !== ""
      ? fetchData(search.toLowerCase())
      : setPokemons(standardPokes.current);
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <View style={styles.favButtonView}>
          <TouchableOpacity onPress={handleFilter} activeOpacity={filtered ? 1 : 0.2} style={{...styles.favButton, opacity:filtered ? 0.2 : 1}}>
            <Svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M12 2L14.39 8.63L21.5 9.27L16 13.14L17.88 19.94L12 16.41L6.12 19.94L8 13.14L2.5 9.27L9.61 8.63L12 2Z" fill="black"/>
            </Svg>
          </TouchableOpacity>
        </View>
        <TextInput
          value={search}
          style={styles.searchArea}
          placeholder="Digite o nome do Pokémon"
          onChangeText={setSearch}
        />
      </View>

      <ListPokemons pokemons={pokemons} />

      <Pagination 
        pagination={pagination} 
        disable={disablePagination} 
        paginationRef={paginationRef} 
        handlePrev={handlePrev} 
        handleNext={handleNext}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 7,
  },
  searchArea: {
    width: "85%",
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  paginationContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    height: "auto",
  },
  barContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  favButtonView: {
    width: "15%",
    marginLeft: 5,
  },
  favButton: {
    height: 40,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#ffd000",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ffd000",
    borderRadius: 5
  }
});

export default PokedexScreen;