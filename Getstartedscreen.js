import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Getstartedscreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>STAYFIT</Text>
            <Image source={require('../assets/vector3.jpeg')} style={styles.img} />
            <Text style={{ color: "#191970", fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 570 }}>Make your body healthy and fit with the StayFit App!</Text>

            <Pressable
                onPress={() => {
                    navigation.navigate("SignIn");
                }}
                style={{ backgroundColor: "#191970", width: 370, height: 50, borderRadius: 10, marginLeft: -10, marginTop: 20 }}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", textAlign: "center", paddingTop: 7, }}>Get Started</Text>
            </Pressable>
        </View>
    )
}

export default Getstartedscreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: "center",
    },
    title: {
        color: '#191970',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        top: 100,
        left: 135,
        height: 80,
        textDecorationLine: 'underline',

    },
    img: {
        width: 370,
        height: 400,
        position: 'absolute',
        paddingTop: 20,
        borderRadius: 20,
        marginLeft: 10,
    }
})