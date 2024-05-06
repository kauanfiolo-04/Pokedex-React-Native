import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import TypeInfo from './TypeInfo'; 
import { useNavigation } from '@react-navigation/native'

const PokeCard = ({ id, name, types, img}) => {
  const navigation = useNavigation();

  return (
    
    <Pressable
      onPress={() => {
        navigation.navigate('Pokémon', { name }) 
      }}
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
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        {types.length > 0 && (
          <View style={styles.typesContainer}>
            {types.map((type, index) => (
              <TypeInfo type={type.type.name} key={index} />
            ))}
          </View>
        )}
      </View>
      <View style={styles.idContainer}>
        <Text style={styles.id}>#{id.toString().padStart(3, '0')}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  imageContainer: {
    paddingHorizontal: 30,
  },
  image: {
    width: 65,
    height: 65,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  typesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  idContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  id: {
    fontSize: 24,
    paddingHorizontal: 30,
    color: "#7c7c7c"
  },
})

export default PokeCard;
