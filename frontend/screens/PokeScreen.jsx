import { Button, Text, View } from 'react-native'
import PokeCard from '../components/PokeCard'
import { useEffect, useState } from 'react'
import { getPokemon } from '../loaders/getPokemon'

const PokeScreen=({route, navigation})=>{
  const {name} = route.params
  const [pokeInfo, setPokeInfo]=useState(null)

  useEffect(()=>{
    getPokemon(name).then(r=>setPokeInfo(r))
  },[])

  return(
    <View>
      <Button
        title="go to Home"
        onPress={()=>navigation.navigate('Home')}
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

export default PokeScreen