import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const PokeCard = ({ id, name, types, img, pokeScreen }) => {
  return (
    <View
      style={styles.card}
    >
      {(img.gif || img.url) && (
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: img.gif || img.url }}
          />
        </View>
      )}
      {/* <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        {types.length > 0 && (
          <View style={styles.typesContainer}>
            {types.map((type, index) => (
              <TypeInfo type={type.type.name} key={index} />
            ))}
          </View>
        )}
      </View> */}
      <View style={styles.idContainer}>
        <Text style={styles.id}>#{id.toString().padStart(3, '0')}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 10,
    height: '100%'
  },
  imageContainer: {
    paddingHorizontal: 30
  },
  image: {
    width: 125,
    height: 125,
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
    paddingHorizontal: 30
  },
})

export default PokeCard;
