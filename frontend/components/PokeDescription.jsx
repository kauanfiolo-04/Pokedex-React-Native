import { View, Text, StyleSheet } from 'react-native'
import { getDescription } from '../loaders/getDescription'
import { useEffect, useState } from 'react'



const PokeDescription=({pokeName})=>{
    const [description, setDesctiption] = useState('')

    useEffect(() => {
        getDescription(pokeName)
        .then((res)=>{
            setDesctiption(res.flavor_text_entries[0].flavor_text)
        }).catch((err)=>{
            console.log(err)
        })
    },[pokeName])   

    return(
        <View>
            <Text>
                {description}
            </Text>
        </View>
    )
}

export default PokeDescription