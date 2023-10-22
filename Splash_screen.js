import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash_screen = () => {
    const nav = useNavigation();
    setTimeout(() => {
        nav.navigate("Getstarted");
    }, 4000);
    return (
        <View style={[styles.container, styles.horizontal]}>
            <Image source={require('../assets/vector2.jpeg')} style={{ width: 200, height: 200,marginTop:200, borderRadius:100 }} />
 
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#fff"/>
            <Text style={styles.title}>STAYFIT</Text>
        </View>
        </View>

    )
}

export default Splash_screen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#191970',
        justifyContent: "center",
    },
    title: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        height: 80,  
        top:50,
        textDecorationLine: 'underline', 

    
    },

    horizontal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
    },
})