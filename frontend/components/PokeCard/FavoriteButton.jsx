import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import checkFavorite from  "loaders/checkFavorite.js";
import setFavorite from "loaders/setFavorite";
import removeFavorite from "loaders/removeFavorite";
import { useUserContext } from "../../context/UserContext";

const FavoriteButton=({pokeId, pokeName, pokeTypes})=>{
  const [favoritado, setFavoritado] = useState(false);

  const { user } = useUserContext();

  useEffect(()=>{
    if(pokeId!==0){
      checkFavorite(pokeId)
      .then(res=>{
        setFavoritado(res.alreadyExists);
      }).catch(error=>console.log(error));
    }
  },[pokeId]);

  const handleFavorite=()=>{
    if(favoritado){
      removeFavorite(pokeId).then(r=>{
        console.log(r);
        if(r) setFavoritado(false);
      }).catch(error=>console.error(error));
    }else{
      setFavorite({
        pokeId,
        pokeName, 
        pokeTypes
      }, user.id).then(r=>{
        console.log(r);
        if(r) setFavoritado(true);
      }).catch(error=>console.error(error));
    }
  } 

  const favStyle=StyleSheet.create({
    button: {
      width: "100%",
      height: 50,
      marginVertical: 15,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: favoritado ? "#ffd000":"#fff",
      borderRadius: 25,
      elevation: 5
    },
    text:{
      color:"#000",
      fontWeight:"800",
      fontSize:16
    }
  });

  return(
    <TouchableOpacity style={favStyle.button} onPress={handleFavorite}>
      <Text style={favStyle.text}>{favoritado ? "Favoritado" : "Favoritar"}</Text>
    </TouchableOpacity>
  )   
};

export default FavoriteButton;