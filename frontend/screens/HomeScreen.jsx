import { Button, View, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import ListPokemons from 'components/ListPokemons';

const HomeScreen = ({ navigation }) => {
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);

  const loadMorePokemons = () => {
    setLimit(limit + 20);
    setOffset(prevOffset => prevOffset + 20);
  };

  const prevPokemon = () => {
    setLimit(limit - 20);
    setOffset(prevOffset => prevOffset - 20);
  };

  return (
    <View style={styles.container}>
      <Button title="Load Less" onPress={prevPokemon} />
      <Button title="Load More" onPress={loadMorePokemons} /> 

        <ListPokemons limit={limit} offset={offset} />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 7,
    flex: 1
  },
  scrollView: {
    flex: 1,
  },
});

export default HomeScreen;
