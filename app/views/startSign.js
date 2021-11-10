import React from 'react';
import { Pressable, Text, View, SafeAreaView } from 'react-native'
import Global from './../styles/global'
import Styles from './../styles/styles'

function startSign({navigation}) {
    return (
        <SafeAreaView style={Global.container}>
            <View style={Styles.signCard}>
                <Text style={Styles.signText}>New To Moveez</Text>
                <Pressable
                    style={Styles.signBut}
                    onPress={() => {navigation.navigate('SignUp')}}                    
                >
                    <Text style={Styles.butText}>SIGNUP</Text>
                </Pressable>
            </View>
            <View style={Styles.signCard}>
                <Text style={Styles.signText}>Alreday a Moveez</Text>
                <Pressable 
                    style={Styles.signBut}
                    onPress={() => {navigation.navigate('SignIn')}}                    
                >
                    <Text style={Styles.butText}>SIGNIN</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

export default startSign;