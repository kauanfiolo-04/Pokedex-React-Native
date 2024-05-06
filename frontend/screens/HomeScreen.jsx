import { Button, Text, View } from 'react-native'
import { useState } from 'react'
import ListPokemons from 'components/ListPokemons'

const HomeScreen=({navigation})=>{
  const [limit, setLimit]=useState(6)
  const [offset, setOffset]=useState(0)

  return(
    <View>
      <ListPokemons limit={limit} offset={offset} />
    </View>
  )
}

export default HomeScreen