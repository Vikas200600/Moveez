import React from 'react';
import { Formik } from 'formik';
import { SafeAreaView, Text, View, TextInput, Pressable } from 'react-native'

import Global from './../styles/global'
import Styles from './../styles/styles'
import FormStyle from './../styles/formStyle'

function signin(props) {
    return (
        <SafeAreaView style={Global.container}>
            <View style={FormStyle.formCard}>
                <Text style={FormStyle.formHead}>SIGNUP</Text>
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
                                onPress={props.handleSubmit}
                                style={Styles.signBut}>
                                <Text style={Styles.butText}>SIGNUP</Text>
                            </Pressable>
                        </View>
                    )}
                </Formik>
            </View>
        </SafeAreaView >
    );
}

export default signin;