import { Button, Text, View } from 'react-native'
import PokeInfo from '../components/PokeInfo'
import { useEffect, useState } from 'react'
import { getPokemon } from '../loaders/getPokemon'

const PokeScreen=({route, navigation})=>{
  const {name} = route.params
  const [pokeData, setPokeData]=useState(null)

  useEffect(()=>{
    getPokemon(name).then(r=>setPokeData(r))
  },[])

  return(
    <View>
      <PokeInfo
        id={pokeData?.id ?? 0}
        types={pokeData?.types ?? [{ slot:0, type:{name:'normal', url:''} }]}
        name={pokeData?.name ?? ''}
        img={{
          url:pokeData?.sprites.front_default ?? '',
          gif: pokeData?.sprites.other.showdown.front_default
        }}
      />
    </View>
  )
}

export default PokeScreen