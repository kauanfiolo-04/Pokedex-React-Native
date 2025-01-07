import { View } from 'react-native'
import ListPokemons from 'components/ListPokemons'

const PokedexScreen = ({navigation}) => {
  return(
    <View>
      <ListPokemons limit={20} offset={0} />
    </View>
  );
};

export default PokedexScreen;