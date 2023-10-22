import { StyleSheet, Image, Text, View, SafeAreaView, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { FitnessItems } from '../fitnesscontext';
const FitScreen = () => {
    const route = useRoute();
    // console.log(route.params);
    const nav = useNavigation();
    const [index, setIndex] = useState(0);
    const workout = route.params.workouts;
    const first = workout[index];
    // console.log(current, "first exercise")
    const {finished, setFinished, exercises, setExercises, cals, setCals, mins, setMins} = useContext(FitnessItems);
    return (
        <SafeAreaView>
            <Image style={{ width: "100%", height: 370 }} source={{ uri: first.pic }} />
            <Text style={{ marginLeft: "auto", marginTop: 38, marginRight: "auto", fontSize: 30, fontWeight: "bold" }}>{first.workoutname}</Text>
            <Text style={{ marginLeft: "auto", marginTop: 38, marginRight: "auto", fontSize: 30, fontWeight: "bold" }}>x{first.laps}</Text>
            {index + 1 >= workout.length ? (
                <Pressable
                    onPress={() => {
                        nav.navigate("Index")
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
                    }}
                    style={{ width: 150, backgroundColor: "blue", borderRadius: 20, marginTop: 20, marginRight: "auto", marginLeft: "auto", padding: 10, }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>done</Text>
                </Pressable>
            ) : (
                <Pressable

                    onPress={() => {
                        nav.navigate("Wait");
                        setFinished([...finished, first.workoutname]);
                        setExercises(exercises + 1);
                        setMins(mins + 2.5);
                        setCals(cals + 6.30);
                        setTimeout(() => {
                            setIndex(index + 1)
                        }, 2000)
                    }}
                    style={{ width: 150, backgroundColor: "blue", borderRadius: 20, marginTop: 20, marginRight: "auto", marginLeft: "auto", padding: 10, }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, color: "white" }}>done</Text>
                </Pressable>
            )}

            <Pressable style={{ flexDirection: "row", alignItems: "center", marginLeft: "auto", marginRight: "auto", marginTop: 50 }}>
                <Pressable
                    disabled={index === 0}
                    onPress={() => {
                        nav.navigate("Wait");
                        setTimeout(() => {
                            setIndex(index - 1)
                        }, 2000)
                    }}
                    style={{ backgroundColor: "green", padding: 10, borderRadius: 20, marginHorizontal: 20, width: 100 }} >
                    <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>previous</Text>
                </Pressable>
                {index + 1 >= workout.length ? (
                    <Pressable
                        onPress={() => {
                            nav.navigate("Index")
                            setTimeout(() => {
                                setIndex(index + 1)
                            }, 2000)
                        }}
                        style={{ backgroundColor: "green", padding: 10, borderRadius: 20, marginHorizontal: 20, width: 100 }} >
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>skip</Text>
                    </Pressable >
                ) : (
                    <Pressable
                        onPress={() => {
                            nav.navigate("Wait")
                            setTimeout(() => {
                                setIndex(index + 1)
                            }, 2000)
                        }}
                        style={{ backgroundColor: "green", padding: 10, borderRadius: 20, marginHorizontal: 20, width: 100 }} >
                        <Text style={{ color: "white", fontWeight: "bold", textAlign: "center" }}>skip</Text>
                    </Pressable >
                )}

            </Pressable>
        </SafeAreaView >
    )
}

export default FitScreen

const styles = StyleSheet.create({})