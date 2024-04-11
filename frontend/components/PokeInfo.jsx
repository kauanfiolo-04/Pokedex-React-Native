import React from "react";
import { Text, Image, View, StyleSheet } from "react-native";

const PokeCard = ({ id, name, types, img, pokeScreen }) => {
  return (
    <View style={styles.card}>
      {(img.gif || img.url) && (
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: img.gif || img.url }} />
        </View>
      )}
      {/* <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        {types.length > 0 && (
          <View style={styles.typesContainer}>
            {types.map((type, index) => (
              <TypeInfo type={type.type.name} key={index} />
            ))}
          </View>
        )}
      </View> */}
      <View style={styles.idContainer}>
        <Text style={styles.id}>{id.toString().padStart(3, "0")}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    paddingHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    width: "98%",
    marginLeft: 5,
    marginRight: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 5,
    paddingVertical: 50,
    height: "90%",
    borderColor: "black",
    borderWidth: 1, // Defina a largura da borda conforme necessário
    borderStyle: "solid", // Especifique o estilo da borda, neste caso, sólido
    borderRadius: 10
  },
  imageContainer: {
    paddingHorizontal: 30,

  },
  image: {
    width: 125,
    height: 125,
  },
  infoContainer: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  name: {
    fontSize: 18, // Adapte para responsividade se necessário
    textTransform: "capitalize",
  },
  typesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  idContainer: {
    flex: 1,
    alignItems: "flex-end",
    marginTop: 50,
    width: "100%",
  },
  id: {
    fontSize: 24, // Adapte conforme necessário
    paddingHorizontal: 30,
    color: "#7c7c7c"
  },
});

export default PokeCard;
