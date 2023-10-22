import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { auth} from "../firebase"

const User_description = (props) => {
    return (    
    
        <View style={styles.container}>
            <Ionicons onPress={() => props.navigation.navigate('Index')}
                style={{ position: "absolute", top: 50, left: 20, color: "white", }} name="arrow-back" size={25} color="white" />
            <View>
            <Text style={{ position: "absolute", top: -180, left: 80, color: "white", fontWeight:"bold",fontSize:25}}>
           {auth.currentUser?.email}
                </Text>
                <Entypo style={{ marginLeft: 120, position: "absolute", top: -300 }} name="user" size={100} color="white" />
                <Text style={{ color: "white", fontSize: 25, marginLeft: 70, top: -170, fontWeight: "bold" }}></Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 20, }}>
                <MaterialCommunityIcons style={{ position: "absolute", left: 20, top: -150 }} name="weight-kilogram" size={40} color="white" />
                <Text style={{ position: "absolute", top: -100, left: 20, color: "white", }}>
                    Weight
                </Text>
                <Text style={{ position: "relative", top: -80, left: 20, color: "white", }}>120 lbs</Text>
                <Ionicons name="body" style={{ position: "absolute", left: 160, top: -150 }} size={40} color="white" />
                <Text style={{ position: "absolute", top: -100, left: 150, color: "white", }}>Body Mass</Text>
                <Text style={{ position: "relative", top: -80, left: 110, color: "white", }}>25%</Text>
                <MaterialCommunityIcons style={{ position: "absolute", left: 290, top: -150 }} name="human-male-height" size={40} color="white" />
                <Text style={{ position: "absolute", top: -100, left: 300, color: "white", }}>Height</Text>
                <Text style={{ position: "relative", top: -80, left: 220, color: "white", }}>  78 in</Text>

            </View>
        </View>

    )
}
export default User_description


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#191970',
        justifyContent: "center",
    }

})