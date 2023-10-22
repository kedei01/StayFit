import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image, } from 'react-native'
import React, { useContext } from 'react'
import ExerciseSections from '../components/ExerciseSections'
import { FitnessItems } from '../fitnesscontext'
import { FontAwesome5 } from '@expo/vector-icons';
import { auth } from "../firebase"
import { FontAwesome } from '@expo/vector-icons';
import {
    signOut
  } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
const Index_screen = (props) => {
    const { exercises, cals, mins, } = useContext(FitnessItems);
    const navigation = useNavigation()
    const Logout = async () => {
            await
            auth
            signOut(auth)
            .then(() =>{
                navigation.replace("SignIn")
            })
          .catch (error => alert(error.message)) 
        };
    return (
        <ScrollView style={{ marginTop: 55 }}>
            <View style={{ backgroundColor: "#191970", padding: 10, height: 200, width: "100%" }}>
                <FontAwesome5 style={{ marginTop: 5 }} 
           onPress={() => props.navigation.navigate('Userdesc')}
                    name="user" size={24} color="white" />
                    <FontAwesome name="sign-out" style={{ marginLeft:350,marginTop:-20 }}  size={24} color="white" onPress={(Logout)} />
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 20 }}>STAYFIT</Text>
                <Text></Text>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold", fontSize: 17 }}>Welcome, {auth.currentUser?.email} </Text>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 20, }}>
                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18, }}>{exercises}</Text>
                        <Text style={{ marginTop: 6, color: "#ffffff", fontSize: 17, }}>EXERCISES</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18, }}>{cals}</Text>
                        <Text style={{ marginTop: 6, color: "#ffffff", fontSize: 17, }}>CALS</Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: 18, }}>{mins}</Text>
                        <Text style={{ marginTop: 6, color: "#ffffff", fontSize: 17, }}>MINS</Text>
                    </View>


                </View>
                <View style={styles.container}>
                    <Image
                        style={{ width: "90%", height: 120, marginTop: 20, borderRadius: 7 }}
                        source={require("../assets/womansports.jpg")} 
                                            />
                </View>
                <ExerciseSections />
            </View>
        </ScrollView>

    )
}

export default Index_screen

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
    }
})