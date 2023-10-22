import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exercise_screen from './screens/Exercise_screen';
import Exercisefit_screen from './screens/Exercisefit_screen';
import Getstartedscreen from './screens/Getstartedscreen';
import Index_screen from './screens/Index_screen';
import SignIn_screen from './screens/SignIn_screen';
import Signup_screen from './screens/Signup_screen';
import Splash_screen from './screens/Splash_screen';
import User_description from './screens/User_description';
import Wait_screen from './screens/Wait_screen';






const Stack = createNativeStackNavigator();
const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash_screen} options={{ headerShown: false }} />
                <Stack.Screen name="Index" component={Index_screen} options={{ headerShown: false }} />
                <Stack.Screen name="Exercise" component={Exercise_screen} options={{ headerShown: false }} />
                <Stack.Screen name="ExerciseFit" component={Exercisefit_screen} options={{ headerShown: false }} />
                <Stack.Screen name="Wait" component={Wait_screen} options={{ headerShown: false }} />
                <Stack.Screen name="SignIn" component={SignIn_screen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={Signup_screen} options={{ headerShown: false }} />
                <Stack.Screen name="Getstarted" component={Getstartedscreen} options={{ headerShown: false }} />
                <Stack.Screen name="Userdesc" component={User_description} options={{ headerShown: false }} />





                






            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator


const styles = StyleSheet.create({})