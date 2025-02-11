import { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Pressable, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUserContext } from "../context/UserContext";
import createUser from "../loaders/user/createUser";

const SignUpScreen = ({ navigation }) => {
  const [info, setInfo] = useState({
    username: null,
    email: null,
    password: null,
  });

  const { setUser } = useUserContext();

  const handleUsername = (text) => {
    setInfo(prevState => ({ ...prevState, username:text.length ? text : null}));
  }

  const handlePassword = (text) => {
    setInfo(prevState => ({ ...prevState, password:text.length ? text : null}));
  }

  const handleEmail = (text) => {
    setInfo(prevState => ({ ...prevState, email:text.length ? text : null}));
  }

  const handleSignUp = () => {
    createUser(info).then(res => {
      if(res.id) {
        setUser({id: res.userId});
        navigation.replace('Main', { screen: "Pokedex" });
      }
    });
  };

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Pressable onPress={Keyboard.dismiss} style={{flex: 1}}>
        <SafeAreaView style={styles.container}>
          <View style={styles.signUpContainer}>
            <Text style={styles.title}>Sign Up</Text>

            <View style={styles.signUpWrapper}>
              <View style={styles.inputWrapper}>
                <Text>Username: </Text>
                <TextInput 
                  style={styles.searchArea} 
                  onChangeText={handleUsername}
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text>Email: </Text>
                <TextInput 
                  style={styles.searchArea} 
                  onChangeText={handleEmail} 
                  keyboardType="email-address" 
                  autoCapitalize="none"
                />
              </View>

              <View style={styles.inputWrapper}>
                <Text>Senha: </Text>
                <TextInput 
                  style={styles.searchArea} 
                  onChangeText={handlePassword} 
                  secureTextEntry
                  autoCapitalize="none"
                />
              </View>

              <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
                <Text style={styles.textSignUpButton}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Pressable>
    </KeyboardAvoidingView>
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
  signUpContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: "auto",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5
  },
  title: {
    fontSize: 24,
    fontWeight: 700
  },
  signUpWrapper: {
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
  signUpButton: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 5 
  },
  textSignUpButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 700
  }
});

export default SignUpScreen;