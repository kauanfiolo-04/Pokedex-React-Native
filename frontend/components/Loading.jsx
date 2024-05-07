import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

const Loading = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#C3C3C3" />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    marginTop: 20,
    fontSize: 16,
    color: 'black'
  }
});

export default Loading;