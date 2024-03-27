import { Button, Text, View } from 'react-native'
import { getPokemons } from '../loaders/getPokemons'
import { useState, useEffect } from 'react'
import ListPokemons from '../components/ListPokemons'

const HomeScreen=({navigation})=>{

  const [pokemons,setPokemons]=useState([])

  useEffect(()=>{
    getPokemons(limit, offset).then(r=>setPokemons(r))
  },[limit, offset])

  return(
    <View>
      <Text>Home Screen</Text>
      <Button
        title="go to pokeScreen"
        onPress={()=>navigation.navigate('Poke')}
      />

      <ListPokemons />

    </View>
  )
}

export default HomeScreen