import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

import SignStart from '../views/startSign';
import SignUp from '../views/signup';
import SignIn from '../views/signin';
import Dashboard from '../views/dashboard';
import Info from '../views/info';
import Header from '../views/header';

const SignStack = createStackNavigator();
const SignStackScreen = ({navigation}) => (
    <SignStack.Navigator>
        <SignStack.Screen
            name="Welcome"
            component={SignStart}
            options = {{
                title: 'Welcome To MOVEEZ',
                headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25}  backgroundColor="black" onPress={() => {navigation.openDrawer()}}></Icon.Button>
                )
            }}
        />
        <SignStack.Screen name="SignUp" component={SignUp}/>
        <SignStack.Screen name="SignIn" component={SignIn}/> 
        <SignStack.Screen name="DashBoard" component={Dashboard}/> 
        <SignStack.Screen name="header" component={Header}/> 
    </SignStack.Navigator>
)

const InfoStack = createStackNavigator();
const InfoStackScreen = ({navigation}) => (
    <InfoStack.Navigator>
        <InfoStack.Screen 
            name="Company Info"
            component={Info}
            options={{
                headerLeft: () => (
                    <Icon.Button name='ios-menu' size={25} backgroundColor="black" onPress={() => {navigation.openDrawer()}}></Icon.Button>
                )
            }}
        /> 
    </InfoStack.Navigator>
)

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
    <AppDrawer.Navigator screenOptions={{ headerShown: false}}>
        <AppDrawer.Screen name= "Moveez" component={SignStackScreen}/>
        <AppDrawer.Screen name="Company Info" component={InfoStackScreen}/>
    </AppDrawer.Navigator>
)

export default () => (
    <NavigationContainer>
        <AppDrawerScreen />
    </NavigationContainer>
)