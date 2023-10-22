import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"

const Signup_screen = (props) => {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confirmpassword, setConfirmPassword] = React.useState('')
  const [gender, setGender] = React.useState('Male');
  const [age, setAge] = React.useState('')
  const [goal, setGoal] = React.useState('')
  const [weight, setWeight] = React.useState('')
  const [height, setHeight] = React.useState('')
  const [error, setError] = React.useState(null);

  const Registeruser = async () => {
    try {
      if (password === confirmpassword) {
        await createUserWithEmailAndPassword(auth, email, password, name, confirmpassword, gender, age, height, weight, goal)
          .then((userCredentials) => {
            const user = userCredentials.user;
            alert("Dear" +"" +"" +""+ name + "" +"" + "successfully created a stayfit account.")
            props.navigation.navigate("SignIn")
            // console.log(user.goal)
          })
          .catch(error =>
            setError(error.code, error.message))
      } else {
        setError("Passwords don't match");
      }
    } catch (e) {
      setError('There was a problem creating your account');
    }

  }
  return (
    
    <KeyboardAvoidingView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, justifyContent: "center", width: 460, backgroundColor: "#191970" }}>
      <Text style={{ textAlign: 'center', marginVertical: 10, color: "white", fontWeight: "bold", fontSize: 30, marginTop: 25, textDecorationLine: 'underline', }}>STAYFIT</Text>

      <View style={{ backgroundColor: "white", borderTopLeftRadius: 130, width: 460, height: 680 }}>
        <Text style={{ textAlign: 'center', marginVertical: 10, paddingTop: 20, color: "#191970", fontWeight: "bold", fontSize: 25, }}>Create Account </Text>
        {error && <Text style={styles.error}>{error}</Text>}
        <TextInput onChangeText={setName}
          value={name} placeholder='Full Name' placeholderTextColor={'grey'} keyboardType={"default"} style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 7, width: '80%', height: '7%', padding: '7%', paddingVertical: 0 }}></TextInput>
        <TextInput onChangeText={setEmail}
          value={email} keyboardType="email-address"
          placeholder="Email address"
          autoCapitalize="none"
          placeholderTextColor={'grey'} style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 5, width: '80%', height: '7%', padding: '7%', paddingVertical: 0 }}></TextInput>
        <TextInput onChangeText={setPassword} value={password} autoCapitalize="none" placeholder='Password' placeholderTextColor={'grey'} secureTextEntry style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 7, width: '80%', height: '7%', padding: '5%', paddingVertical: 0 }}>

        </TextInput>
        <TextInput onChangeText={setConfirmPassword} value={confirmpassword} autoCapitalize="none" placeholder='Confirm Password' placeholderTextColor={'grey'} secureTextEntry style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 7, width: '80%', height: '7%', padding: '5%', paddingVertical: 0 }}>

        </TextInput>
        <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
          <View style={{ flexDirection: 'row', marginLeft: 25,marginTop:7 }}>
            <Text style={{ marginLeft: 10, fontSize: 18, color: "grey" }}>Male</Text>
            <RadioButton value="Male" />
              <Text style={{ marginLeft: 10, fontSize: 18, color: "grey" }}>Female</Text>
              <RadioButton value="Female" />
          </View>
        </RadioButton.Group>
        <TextInput onChangeText={setAge}
          value={age} placeholder='Age' placeholderTextColor={'grey'} keyboardType={"number"} style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 7, width: '80%', height: '7%', padding: '7%', paddingVertical: 0 }}></TextInput>
        <TextInput onChangeText={setWeight}
          value={weight} placeholder='weight in kg' placeholderTextColor={'grey'} keyboardType={"number"} style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 7, width: '80%', height: '7%', padding: '5%', paddingVertical: 0 }}></TextInput>

        <TextInput onChangeText={setHeight}
          value={height} placeholder='height in cm' placeholderTextColor={'grey'} keyboardType={"number"} style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 7, width: '80%', height: '7%', padding: '5%', paddingVertical: 0 }}></TextInput>

        <TextInput onChangeText={setGoal}
          value={goal} placeholder='What is your Goal' placeholderTextColor={'grey'} keyboardType={"default"} style={{ borderColor: '#191970', color: 'black', fontSize: 18, borderWidth: 2.5, borderRadius: 10, marginHorizontal: 10, marginTop: 7, width: '80%', height: '7%', padding: '5%', paddingVertical: 0 }}></TextInput>

        <View style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
          <Text style={{ fontSize: 16, color: "grey", fontWeight: "bold", marginTop: 10 }} >Got a stayfit account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
            <Text style={{ fontSize: 16, color: "#191970", fontWeight: "bold", marginTop: 10 }}> Login</Text>
          </TouchableOpacity>
          </View>
          <View style={{ }}>
            <Pressable style={{ backgroundColor: "#191970", marginLeft: 10, width: "80%", padding: 10, borderRadius: 20,marginTop:5 }}
              onPress={Registeruser} disabled={!email || !password || !confirmpassword}>
              <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", textAlign: "center",  }}>Sign Up</Text>
            </Pressable>
         
        </View>
      </View>
    </KeyboardAvoidingView>

  )
}

export default Signup_screen

const styles = StyleSheet.create({
  error: {
    color: 'red',
    textAlign:"center",
  },
})