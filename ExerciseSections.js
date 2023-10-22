import { SafeAreaView, Image, Pressable, StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import fitness from '../data/gymdata'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const ExerciseSections = () => {
    const fitnessdata = fitness;
    const nav = useNavigation();
    return (
        <View>
            {fitnessdata.map((item, key) => (
                
                <Pressable
                    onPress={() => nav.navigate("Exercise", {
                        pic: item.pic,
                        workouts: item.workouts,
                        Id: item.Id
                    })}
                    style={{ alignItems: "center", justifyContent: "center", margin: 10, }}
                    key={key}>
                    <Image
                        style={{ height: 135, width: "93%", borderRadius: 6, }}
                        source={{uri: item.pic}}  />
                    <Text style={{ position: "absolute", color: "white", fontSize: 14, fontWeight: "bold", left: 20, top: 20 }}>
                        {item.workoutname}
                    </Text>
                    <MaterialCommunityIcons style={{ position: "absolute", color: "white", bottom: 15, left: 20 }} name="lightning-bolt" size={24} color="black" />
                </Pressable>
            )
            )}

        </View>
    )
}

export default ExerciseSections

const styles = StyleSheet.create({

})