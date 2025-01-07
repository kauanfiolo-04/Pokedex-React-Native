import { View, Image, Text, StyleSheet } from 'react-native'

const colours= {
	normal: '#a9a8a8',
	fire: '#f99952',
	water: '#3b8ae7',
	electric: '#ffd526',
	grass: '#4fc508',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#a76bd7',
	ground: '#ed6635',
	flying: '#98a3ed',
	psychic: '#F95587',
	bug: '#84c518',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
}

const typeImages = {
  normal: require('assets/PokeTypes/normal.png'),
  fire: require('assets/PokeTypes/fire.png'),
  water: require('assets/PokeTypes/water.png'),
  electric: require('assets/PokeTypes/electric.png'),
  grass: require('assets/PokeTypes/grass.png'),
  ice: require('assets/PokeTypes/ice.png'),
  fighting: require('assets/PokeTypes/fighting.png'),
  poison: require('assets/PokeTypes/poison.png'),
  ground: require('assets/PokeTypes/ground.png'),
  flying: require('assets/PokeTypes/flying.png'),
  psychic: require('assets/PokeTypes/psychic.png'),
  bug: require('assets/PokeTypes/bug.png'),
  rock: require('assets/PokeTypes/rock.png'),
  ghost: require('assets/PokeTypes/ghost.png'),
  dragon: require('assets/PokeTypes/dragon.png'),
  dark: require('assets/PokeTypes/dark.png'),
  steel: require('assets/PokeTypes/steel.png'),
  fairy: require('assets/PokeTypes/fairy.png'),
};

const TypeInfo=({type})=>{
  const colour=colours[type] ?? '#777'
  const img=typeImages[type]

  return(
    <View  style={[styles.container, {backgroundColor:colour}]}>
      <Image width={24} height={24} style={styles.image} source={img} alt='poketype'/>
      <Text style={styles.text}>{type}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 9999,
    marginVertical: 2,
    backgroundColor: '#777', 
  },
  image: {
    height: 16, 
    width: 16, 
    margin: 4, 
  },
  text: {
    marginHorizontal: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ffffff',
  }
})

export default TypeInfo
