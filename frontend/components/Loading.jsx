import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

const Loading = ({ message }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#FEFEFE" />
      {message && <Text style={styles.message}>{message}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
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