import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


import SignStart from '../views/startSign'
import SignUp from '../views/signup'
import SignIn from '../views/signin'
import Dashboard from '../views/dashboard'

const SignStack = createStackNavigator();
const SignStackScreen = () => (
    <SignStack.Navigator>
        <SignStack.Screen name="Welcome" component={SignStart}/>
        <SignStack.Screen name="SignUp" component={SignUp}/>
        <SignStack.Screen name="SignIn" component={SignIn}/> 
        <SignStack.Screen name="DashBoard" component={Dashboard}/> 
    </SignStack.Navigator>
)

const SignInStack = createStackNavigator();
const SignInScreen = () => (
    <SignInStack.Navigator>
        <SignInStack.Screen name="SignIn" component={SignIn}/> 
        <SignInStack.Screen name="DashBoard" component={DashBoard}/> 
    </SignInStack.Navigator>
)

export default () => (
    <NavigationContainer>
        <SignStackScreen />
    </NavigationContainer>
)