import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FitnessItems } from '../fitnesscontext';
const Exercise_screen = () => {
    const route = useRoute();
    const nav = useNavigation();
    const { finished, setFinished } = useContext(FitnessItems);
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "white", marginTop: 50 }}>
                <Image style={{ width: "100%", height: 170, }} source={{ uri: route.params.pic }} />
                <Ionicons onPress={() => nav.goBack()}
                    style={{ position: "absolute", top: 20, left: 20, color: "white", }} name="arrow-back" size={28} color="black" />
                {route.params.workouts.map((i, index) => (
                    <Pressable style={{ flexDirection: "row", alignContent: "center", margin: 10, }} key={index}>
                        <Image style={{ width: 90, height: 90 }} source={{ uri: i.pic }} />
                        <View style={{ marginLeft: 10, }}>
                            <Text style={{ fontSize: 17, fontWeight: "bold", width: 170, }}>{i.workoutname}</Text>

                            <Text style={{ fontSize: 18, color: "gray", marginTop: 4 }}>x{i.laps}</Text>
                        </View>
                        {finished.includes(i.workoutname) ? (
                            <AntDesign style={{ marginLeft: 40, marginTop: 10 }} name="checkcircle" size={30} color="green" />
                        ) : (
                            null
                        )}
                    </Pressable>
                ))}
            </ScrollView>
            <Pressable
                onPress={() => (
                    nav.navigate("ExerciseFit", {
                        workouts: route.params.workouts,

                    }),
                    setFinished([])
                )}
                style={{ marginVertical: 20, backgroundColor: "blue", padding: 10, marginLeft: "auto", marginRight: "auto", width: 120, borderRadius: 6, }} >
                <Text style={{ textAlign: 'center', color: "white", fontSize: 15, fontWeight: "600" }}>START</Text>
            </Pressable>
        </>
    )
}

export default Exercise_screen

const styles = StyleSheet.create({})