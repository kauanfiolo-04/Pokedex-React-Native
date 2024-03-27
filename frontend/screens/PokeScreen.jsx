import { Button, Text, View } from 'react-native'

const PokeScreen=({navigation})=>{
  return(
    <View>
      <Text>Home Screen</Text>
      <Button
        title="go to Home"
        onPress={()=>navigation.navigate('Home')}
      />
    </View>
  )
}

export default PokeScreen