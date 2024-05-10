import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import checkFavorite from  "loaders/checkFavorite.js";
import setFavorite from "loaders/setFavorite";
import removeFavorite from "loaders/removeFavorite";

const FavoriteButton=({pokeId, pokeName, pokeTypes})=>{
  const [favoritado, setFavoritado]=useState('Favoritar');

  useEffect(()=>{
    if(pokeId!==0){
      checkFavorite(pokeId).then(res=>{
        setFavoritado(!(res.AlreadyExists===null));
      }).catch(error=>console.log(error));
    }
  },[pokeId]);

  const handleFavorite=()=>{
    if(favoritado==='Favoritado'){
      removeFavorite(pokeId).then(r=>{
        if(r) setFavoritado('Favoritar')
      }).catch(error=>console.error(error))
    }else{
      console.log(pokeTypes.map(pokeType=>pokeType.type.name))
      setFavorite({
        pokeId,
        pokeName,
        pokeTypes
      }).then(r=>{
        if(r) setFavoritado('Favoritado')
      }).catch(error=>console.error(error))
    }
  } 

  const favStyle={
    button: {
      backgroundColor: favoritado ? '#dd1f26':'#01010101',
      width: "100%",
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF',
      borderRadius: 25,
      elevation: 3,
      shadowOpacity: 0.3,
      shadowRadius: 3,
      shadowOffset: { width: 0, height: 2 },
    },
    text:{
      color:'#000000'
    }
  }

  return(
    <TouchableOpacity style={favStyle.button} onPress={handleFavorite}>
      <Text style={favStyle.text}>{favoritado}</Text>
    </TouchableOpacity>
  )   
};

export default FavoriteButton;