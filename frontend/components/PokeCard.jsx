import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import TypeInfo from './TypeInfo'; // Assumindo que TypeInfo é compatível com React Native
// Importe o sistema de navegação, se necessário, para lidar com a navegação
// import { useNavigation } from '@react-navigation/native';

const PokeCard = ({ id, name, types, img }) => {
  // const navigation = useNavigation(); // Se estiver usando React Navigation

  return (
    <TouchableOpacity
      onPress={() => {
        /* navigation.navigate('DestinationScreenName', { name }); */
      }}
      style={styles.card}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: img.gif || img.url }}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.typesContainer}>
          {types.map((type, index) => (
            <TypeInfo type={type.type.name} key={index} />
          ))}
        </View>
      </View>
      <View style={styles.idContainer}>
        <Text style={styles.id}>#{id.toString().padStart(3, '0')}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 60, // Ajuste conforme necessário para responsividade
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
  infoContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 18, // Adapte para responsividade se necessário
    textTransform: 'capitalize',
  },
  typesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  idContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  id: {
    fontSize: 24, // Adapte conforme necessário
  },
})

export default PokeCard;
