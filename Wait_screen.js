import { SafeAreaView, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const Wait_screen = () => {
    //This screen consists of the countdown and start functions to help users pause after some secomds of working out, take a break and wait.
    var countdown = 0;
    const nav = useNavigation();
    const [countdownleft, setcountdownleft] = useState(3);
    const Countdownstart = () => {
        setTimeout(() => {
            if (countdownleft <= 0) {
                nav.goBack();
                clearTimeout(countdown)
            }
            setcountdownleft(countdownleft - 1)
        }, 1000)
    }
    useEffect(() => {
        Countdownstart();
        //clean up
        return () => clearTimeout(countdown);
    },)
    return (
        <SafeAreaView>
            <Image
                // resizeMode="contain"
                source={require('../assets/rest.jpg')} 
                style={{ width: "100%", height: 300 }}
            />

            <Text style={{ fontSize: 30, fontWeight: "900", marginTop: 50, textAlign: "center", }}>REST</Text>
            <Text style={{ fontSize: 40, fontWeight: "800", marginTop: 50, textAlign: "center", }}>{countdownleft}</Text>
        </SafeAreaView>
    )
}

export default Wait_screen

const styles = StyleSheet.create({})