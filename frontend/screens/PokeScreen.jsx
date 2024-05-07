import { View, StyleSheet } from "react-native";
import PokeInfo from "components/PokeInfo";
import { useEffect, useState } from "react";
import { getPokemon } from "loaders/getPokemon";

const PokeScreen=({route, navigation})=>{
  const {name} = route.params;
  const [pokeData, setPokeData]=useState(null);

  useEffect(()=>{
    getPokemon(name).then(r=>setPokeData(r));
  },[]);

  return(
    <View style={styles.contentWrapper}>
      <PokeInfo
        id={pokeData?.id ?? 0}
        types={pokeData?.types ?? [{ slot:0, type:{name:"normal", url:""} }]}
        name={pokeData?.name ?? ""}
        img={{
          url:pokeData?.sprites.front_default ?? "",
          gif: pokeData?.sprites.other.showdown.front_default
        }}
      />
    </View>
  );
};

const styles=StyleSheet.create({
  contentWrapper:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  }
});

export default PokeScreen;