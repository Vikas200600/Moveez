import React from 'react';
import { Formik } from 'formik';
import { SafeAreaView, Text, View, TextInput, Pressable } from 'react-native'

import Global from './../styles/global'
import Styles from './../styles/styles'
import FormStyle from './../styles/formStyle'

function signin({navigation}) {
    return (
        <SafeAreaView style={Global.container}>
            <View style={FormStyle.formCard}>
                <Text style={FormStyle.formHead}>SIGNIN</Text>
                <Formik
                    initialValues={{ name: '', password: '' }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                    }}
                >
                    {props => (
                        <View>
                            <TextInput
                                style={Global.input}
                                placeholder="Enter Email"
                                onChange={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                value={props.values.email}
                            />
                            <TextInput
                                style={Global.input}
                                placeholder="Enter Password"
                                onChange={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                value={props.values.password}
                            />
                            <Pressable
                                onPress={() => {navigation.navigate('DashBoard')} }
                                style={Styles.signBut}
                            >
                                <Text style={Styles.butText}>SIGNIN</Text>
                            </Pressable>
                        </View>
                    )}
                </Formik>
                <View style={FormStyle.toggleConatainer}>
                    <Text style={FormStyle.toggleAsk}> Dont Have An Account ?</Text>
                    <Pressable
                        onPress={() => {navigation.push('SignUp')}}
                    >
                        <Text style={FormStyle.toggleLink}>SignUp</Text>
                    </Pressable>                  
                </View>
            </View>
        </SafeAreaView >
    );
}

export default signin;