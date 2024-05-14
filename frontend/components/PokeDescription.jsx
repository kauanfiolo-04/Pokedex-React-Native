import { View, Text } from "react-native";
import getDescription from "loaders/getDescription";
import { useEffect, useState } from "react";

const PokeDescription = ({ style, pokeName }) => {
  const [description, setDescription] = useState("");

  useEffect(() => {
    getDescription(pokeName)
      .then((res) => {
        const descArr=res.flavor_text_entries;
        if(descArr?.length){
          const descriptionText = descArr[0]?.flavor_text ?? 'DESC PADRÃO';
          const formattedText = descriptionText.replace(/\n/g, " ");
          setDescription(formattedText);
        }
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
