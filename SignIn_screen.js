import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, TextInput, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from "../firebase"
import { useNavigation } from '@react-navigation/native';

const SignIn_screen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
 
//   const navigation = useNavigation()
// useEffect(() =>{
//   const unsubscribe=auth.onAuthStateChanged(user => {
//     if (user) {
//       navigation.navigate("Home")
//     }
//   })
//   return unsubscribe
// },
// [])
  
  const UsersignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth,email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        props.navigation.navigate("Index")
       })
      }
    catch (error) {
      if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
        setError('Your email/password is wrong');
      } else if (error.code === 'auth/email-already-in-use') {
        setError('This email already exists with a registered account');
      } else {
        setError('Your request is unsuccessful');
      }
    }
  }
  
  
  return (
    <View style={{ flex: 1, justifyContent: "center", width: 460, backgroundColor: "#191970" }}>
      <Text style={{ textAlign: 'center', marginVertical: 10, color: "white", fontWeight: "bold", fontSize: 30, marginTop: 25, textDecorationLine: 'underline', }}>STAYFIT</Text>
      <View style={{ backgroundColor: "white", height: 700, width: 460, borderTopLeftRadius: 130, paddingTop: 100, }}>
        <Text style={{ fontSize: 35, color: "#191970", fontWeight: "bold", marginLeft: 90, marginTop: -30 }}>Welcome </Text>
        <Text style={{ color: "grey", fontSize: 19, fontWeight: "bold", marginBottom: 20, marginLeft: 100 }}>Sign In</Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput onChangeText={setEmail}
          value={email}keyboardType="email-address"
          placeholder="Email address"
          autoCapitalize="none" placeholderTextColor={'grey'} style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 40, width: '80%', height: '8%', 
          padding: '5%', paddingVertical: 0 }}></TextInput>
        <TextInput
         onChangeText={setPassword} value={password} placeholder='Password'autoCapitalize="none" placeholderTextColor={'grey'} secureTextEntry style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 40, width: '80%', height: '8%', padding: '5%', paddingVertical: 0 }}>
        </TextInput>
        <Pressable
          onPress={UsersignIn}
          style={{ backgroundColor: "#191970", marginLeft: 10, width: "80%", padding: 10, borderRadius: 20 , top:30}} disabled={!email || !password} >
          <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", textAlign: "center" }}>Login</Text>
        </Pressable>
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 16, color: "grey", fontWeight: "bold", marginTop: 50 }} >Don't have an account?</Text>
          <TouchableOpacity  onPress={() => props.navigation.navigate("SignUp")}>
            <Text style={{ fontSize: 16, color: "#191970", fontWeight: "bold", marginTop: 50 }}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}


export default SignIn_screen

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign:"center",
  },
})