import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import checkFavorite from  "loaders/checkFavorite.js";
import setFavorite from "loaders/setFavorite";
import removeFavorite from "loaders/removeFavorite";

const FavoriteButton=({pokeId, pokeName, pokeTypes})=>{
  const [favoritado, setFavoritado]=useState(false);

  useEffect(()=>{
    if(pokeId!==0){
      checkFavorite(pokeId)
      .then(res=>{
        setFavoritado(res.AlreadyExists);
      }).catch(error=>console.log(error));
    }
  },[pokeId]);

  const handleFavorite=()=>{
    if(favoritado){
      removeFavorite(pokeId).then(r=>{
        if(r) setFavoritado(false)
      }).catch(error=>console.error(error))
    }else{
      setFavorite({
        pokeId,
        pokeName,
        pokeTypes
      }).then(r=>{
        if(r) setFavoritado(true)
      }).catch(error=>console.error(error))
    }
  } 

  const favStyle={
    button: {
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
    <TouchableOpacity style={{...favStyle.button, backgroundColor: favoritado ? '#19ff00':'#ff0000'}} onPress={handleFavorite}>
      <Text style={favStyle.text}>{favoritado ? "Favoritado" : "Favoritar"}</Text>
    </TouchableOpacity>
  )   
};

export default FavoriteButton;