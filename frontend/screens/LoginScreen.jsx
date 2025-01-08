import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useState, useRef } from "react";

const LoginScreen = ({ navigation }) => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    console.log(emailRef?.current.value);
    console.log(passwordRef?.current.value);
    console.log('login')
  };

  const handleSignUp = () => {
    navigation.replace('Main', { screen: "Pokedex" });
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.loginWrapper}>
          <View style={styles.inputWrapper}>
            <Text>Email: </Text>
            <TextInput style={styles.searchArea} ref={emailRef}/>
          </View>

          <View style={styles.inputWrapper}>
            <Text>Senha: </Text>
            <TextInput style={styles.searchArea} ref={passwordRef}/>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.textLoginButton}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUp}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpButton}>Sign-up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc"
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: "60%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 700
  },
  loginWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    width: "100%"
  },
  inputWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: 5,
    width: "100%"
  },
  searchArea: {
    width: "100%",
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  loginButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 5 
  },
  textLoginButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700
  },
  signUp: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  signUpButton: {
    color: "blue",
    fontWeight: 700
  }
});

export default LoginScreen;