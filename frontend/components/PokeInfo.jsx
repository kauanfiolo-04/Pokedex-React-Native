import React, { useEffect, useState } from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import TypeInfo from "components/TypeInfo.jsx";
import PokeDescription from "components/PokeDescription";
import checkFavorite from  "loaders/checkFavorite.js";
import setFavorite from "loaders/setFavorite";

const PokeInfo = ({ id, name, types, img, ...props }) => {
  const [isFavorite,setIsFavorite]=useState(false);

  useEffect(()=>{
    checkFavorite(id).then(res=>{
      setIsFavorite(!(res.AlreadyExists===null));
    }).catch(error=>console.log(error));
  },[id]);

  const FavoriteButton=({favorite})=>{

    const handleFavorite=()=>{
      setFavorite({
        pokeId:id,
        pokeName:name,
        pokeTypes:types
      }).then(r=>{
        if(r) setIsFavorite(true)
      })
    }

    console.log(favorite)
    const favStyle={
      button: {
        width: 50,
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
      <TouchableOpacity style={favStyle.button}>
        <Text style={favStyle.text}>{favorite ? "Favoritado" : "KKKKKK"}</Text>
      </TouchableOpacity>
    )   
  };

  return (
    <View style={styles.card}>
      {(img.gif || img.url) && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: img.gif || img.url }} />
        </View>
      )}
      <View style={styles.idContainer}>
        <View style={styles.infoContainer}>
          <View style={styles.nameAndTypes}>
            <Text style={styles.id}>#{id.toString().padStart(3, "0")}</Text>

            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.typeLabel}>
            <Text style={{fontSize:20}}>Type</Text>
            {types.length > 0 && (
              <View style={styles.typesContainer}>
                {types.map((type, index) => (
                  <TypeInfo type={type.type.name} key={index} />
                ))}
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
          <PokeDescription style={styles.description} pokeName={name}/>
          <FavoriteButton favorite={isFavorite}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    color: "#7c7c7c",
    flexDirection: "column",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 5,
    height: "auto",
    borderColor: "black",
    borderWidth: 1, 
    borderStyle: "solid", 
    borderRadius: 10
  },
  imageContainer: {
    marginHorizontal: "auto",
    marginTop: 15
  },
  image: {
    width: 125,
    height: 125,
  },
  infoContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontWeight: "700",
    fontSize: 30,
    textTransform: "capitalize",
    paddingBottom: 30
  },
  typesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  idContainer: {
    display: "flex",
    alignItems: "flex-end",
    marginTop: 50,
    width: "100%",
  },
  id: {
    fontSize: 24,
  },
  nameAndTypes:{
    width: "100%",
    display: "flex",
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    alignItems:"center",
    paddingHorizontal: 15
  },
  typeLabel:{
    display: "flex",
    flexDirection: "column",
    gap: 2,
    paddingBottom: 15,
    paddingHorizontal: 15
  },
  descriptionContainer:{
    width: '100%',
    paddingBottom: 15,
    paddingHorizontal: 15
  },
});

export default PokeInfo;
