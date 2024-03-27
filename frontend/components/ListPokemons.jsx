import { useEffect, useState } from 'react'
import { getPokemons } from '../loaders/getPokemons'
import PokeCard from './PokeCard'
import { FlatList } from 'react-native'

const ListPokemons=({limit, offset})=>{
  const [pokemons,setPokemons]=useState([])

  useEffect(()=>{
    getPokemons(limit, offset).then(r=>setPokemons(r))
  },[limit, offset])

  return <View style={styles.container}>{pokemons.map((poke, index)=>
      <View key={index} stytle={styles.container}>
        <PokeCard
          id={poke?.id ?? 0}
          types={poke?.types ?? [{ slot:0, type:{name:'normal', url:''} }]}
          name={poke?.name ?? ''}
          img={{
            url:poke?.sprites.front_default ?? '',
            gif: poke?.sprites.other.showdown.front_default
          }}
        />
      </View>
  )}</View>
}

const styles=StyleSheet.create({
  container:{
    display:'flex',
    flexPosition:'column',
    width:'full',
    justifyContent:'center',
    gap:8
  },

  item:{
    width:'full',
    display:'flex',
    justifyContent:'center'
  }
})

export default ListPokemons