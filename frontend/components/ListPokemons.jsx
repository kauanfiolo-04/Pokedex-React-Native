
import { View, FlatList, StyleSheet } from "react-native";
import Loading from "./Loading";
import PokeCard from "./PokeCard";

const ListPokemons = ({pokemons}) => {
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

  return <FlatList
    data={pokemons}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.toString()}
    style={styles.list}
    ListEmptyComponent={<Loading message={"Carregando Pokemons..."} />}
  />
};

const styles = StyleSheet.create({
  list: {
    height: "85%",
    width: "100%",
  },
  item: {
    marginVertical: 5,
  },
});

export default ListPokemons;
