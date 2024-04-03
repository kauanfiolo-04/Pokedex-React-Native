import { Button, Text, View } from 'react-native'
import { getPokemon } from '../loaders/getPokemon'
import { useState, useEffect } from 'react'
import ListPokemons from '../components/ListPokemons'
import PokeCard from '../components/PokeCard'

const HomeScreen=({navigation})=>{
  const [limit, setLimit]=useState(5)
  const [offset, setOffset]=useState(0)
  const [pokeInfo, setPokeInfo]=useState(null)

  useEffect(()=>{
    getPokemon('snorlax').then(r=>setPokeInfo(r))
  },[])

  return(
    <View>
      <Text>Home Screen</Text>
      <Button
        title="go to pokeScreen"
        onPress={()=>navigation.navigate('Poke')}
      />

      <PokeCard 
        id={pokeInfo?.id ?? 0}
        types={pokeInfo?.types ?? [{ slot:0, type:{name:'normal', url:''} }]}
        name={pokeInfo?.name ?? ''}
        img={{
          url:pokeInfo?.sprites.front_default ?? '',
          gif: pokeInfo?.sprites.other.showdown.front_default
        }}
      />

    </View>
  )
}

export default HomeScreen