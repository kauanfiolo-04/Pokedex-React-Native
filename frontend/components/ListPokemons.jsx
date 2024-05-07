import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, TextInput, FlatList, Button, Text } from "react-native";
import { getPokemons } from "loaders/getPokemons";
import { searchMenuBarLoader } from "loaders/searchBarLoader";
import PokeCard from "./PokeCard";
import Loading from "./Loading";

const ListPokemons = ({ Limit, Offset }) => {
  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch]=useState("");
  const currentController=useRef(null);
  const standardPoke=useRef(null);
  const [limit, setLimit]=useState(Limit);
  const [offset, setOffset]=useState(Offset);
  const [pagination, setPagination]=useState(0);
  const paginationRef=useRef(null);
  const [disablePagination, setDisablePagination]=useState(false);

  const fetchData=async (valueInputed)=>{
    currentController.current = new AbortController();

    try {
      const poke = await searchMenuBarLoader(valueInputed, currentController.current.signal);
      if(poke!=='vazio'){
        setPokemons([poke]);
        setDisablePagination(true);
      }else{
        setPokemons(standardPoke.current);
        setDisablePagination(false);
      }
      currentController.current = null; // Limpa a referência após a conclusão
    } catch (error) {
        // Verificar se o erro é um erro de aborto
        if (error.name === 'AbortError') {
          console.log('Fetch foi cancelado');
        } else {
          console.error(error);
        }
    }
  }

  const handlePrev=(event)=>{
    event.preventDefault();
    setPagination(prevState=>prevState-1);
  };

  const handleNext=(event)=>{
    event.preventDefault();
    setPagination(prevState=>prevState+1);
  };

  useEffect(() => {
    setPokemons([]);
    getPokemons(limit, offset).then((r) =>{
      setPokemons(r);
      if(standardPoke.current===null) standardPoke.current=r;
    });
  }, [limit, offset]);

  useEffect(()=>{
    setOffset(pagination*20);
  },[pagination]);

  useEffect(()=>{
    // passsando lowercase pois o celular sempre deixa a primeira letra minuscula fazendo com q de errado a pesquisa
    search!=='' ? fetchData(search.toLowerCase()) : setPokemons(standardPoke.current);
  },[search]);

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

  const Pagination=({pagination, disable})=>(
    <View style={{...styles.paginationContainer, display:disable ? "none" : "flex"}} ref={paginationRef}>
      <Button title="prev" onPress={handlePrev}/>
      <Text>{pagination+1}</Text>
      <Button title="next" onPress={handleNext}/>
    </View>
  )

  return (
    <View style={styles.container}>
      <TextInput
        value={search}
        style={styles.searchArea}
        placeholder="Type the Pokémon name or ID"
        onChangeText={setSearch}
      />

      <FlatList
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
        ListEmptyComponent={<Loading message={"Carregando Pokemons..."}/>}
      />

      <Pagination pagination={pagination} disable={disablePagination}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 7
  },
  searchArea: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5
  },
  list: {
    height: "85%",
    width: "100%",
  },
  item: {
    marginVertical: 5,
  },
  paginationContainer: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
    height: "auto"
  }
});

export default ListPokemons;