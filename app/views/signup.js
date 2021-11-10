import React from 'react';
import { SafeAreaView, Text, TextInput, View, Pressable } from 'react-native';
import { Formik } from 'formik';

import Global from './../styles/global';
import Styles from './../styles/styles';
import FormStyle from './../styles/formStyle';

function SignUp({navigation}) {
    return (
        <SafeAreaView style={Global.container}>
            <View style={FormStyle.formCard}>
                <Text style={FormStyle.formHead}>SIGNUP</Text>
                <Formik
                    initialValues={{ name: '', password: '', email: '', phone: '', profession: '' }}
                    onSubmit={(values, actions) => {
                        actions.resetForm();
                    }}
                >
                    {props => (
                        <View>
                            <TextInput
                                style={Global.input}
                                placeholder="Enter Name"
                                onChange={props.handleChange('name')}
                                onBlur={props.handleBlur('name')}
                                value={props.values.name}
                            />
                            <TextInput
                                style={Global.input}
                                placeholder="Enter Password"
                                onChange={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                value={props.values.password}
                            />
                            <TextInput
                                style={Global.input}
                                placeholder="Enter Email"
                                onChange={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                value={props.values.email}
                            />
                            <TextInput
                                style={Global.input}
                                placeholder="Enter Phone"
                                onChange={props.handleChange('phone')}
                                onBlur={props.handleBlur('phone')}
                                value={props.values.phone}
                            />
                            <TextInput
                                style={Global.input}
                                placeholder="Enter Profession"
                                onChange={props.handleChange('profession')}
                                onBlur={props.handleBlur('profession')}
                                value={props.values.profession}
                            />
                            <Pressable
                                onPress={props.handleSubmit}
                                style={Styles.signBut}>
                                <Text style={Styles.butText}>SIGNUP</Text>
                            </Pressable>
                        </View>
                    )}
                </Formik>
                <View style={FormStyle.toggleConatainer}>
                    <Text style={FormStyle.toggleAsk}> Already Have An Account ?</Text>
                    <Pressable
                        onPress={() => {navigation.push('SignIn')}}
                    >
                        <Text style={FormStyle.toggleLink}>SignIn</Text>
                    </Pressable>                  
                </View>
            </View>
        </SafeAreaView >
    );
}

export default SignUp;