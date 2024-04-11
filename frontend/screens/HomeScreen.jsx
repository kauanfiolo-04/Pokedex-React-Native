import { Button, Text, View } from 'react-native'
import { getPokemon } from '../loaders/getPokemon'
import { useState, useEffect } from 'react'
import ListPokemons from '../components/ListPokemons'
import PokeCard from '../components/PokeCard'

const HomeScreen=({navigation})=>{
  const [limit, setLimit]=useState(6)
  const [offset, setOffset]=useState(0)

  return(
    <View>
      <Text>Home Screen</Text>
      {/* <Button
        title="go to pokeScreen"
        onPress={()=>navigation.navigate('Poke')}
      /> */}

      <ListPokemons limit={limit} offset={offset} />

    </View>
  )
}

export default HomeScreen