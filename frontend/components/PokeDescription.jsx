import { View, Text } from "react-native";
import getDescription from "loaders/getDescription";
import { useEffect, useState } from "react";

const PokeDescription = ({ style, pokeName }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    getDescription(pokeName)
      .then((res) => {
        const descriptionText = res.flavor_text_entries[0].flavor_text;
        const formattedText = descriptionText.replace(/\n/g, " ");
        setDescription(formattedText);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pokeName]);

  return (
    <View style={style}>
      <Text>{description}</Text>
    </View>
  );
};

export default PokeDescription;
