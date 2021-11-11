import React from 'react';
import { Text, View, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Global from './../styles/global'
import Styles from './../styles/styles'
import FormStyle from './../styles/formStyle'

function info(props) {
    return (
        <SafeAreaView style={Global.container}>
            <View style={[FormStyle.formCard, {alignItems: 'flex-start', paddingVertical: 40}]}>
                <View style={Styles.infoCard}>
                    <Icon name="building" size={50}></Icon>
                    <View style={Styles.info}>
                        <Text style={Styles.infoHead}>Office</Text>
                        <Text style={Styles.infoData}>GeekSynergy Technologies</Text>
                    </View>
                </View>
                <View style={Styles.infoCard}>
                    <Icon name="map-marker" size={60}></Icon>
                    <View style={Styles.info}>
                        <Text style={Styles.infoHead}>Address</Text>
                        <Text style={Styles.infoData}>Sanjaynagr, Bengaluru-56</Text>
                    </View>
                </View>
                <View style={Styles.infoCard}>
                    <Icon name="phone" size={50}></Icon>
                    <View style={Styles.info}>
                        <Text style={Styles.infoHead}>Phone</Text>
                        <Text style={Styles.infoData}>+91 - 9876543210</Text>
                    </View>
                </View>
                <View style={Styles.infoCard}>
                    <Icon name="at" size={50}></Icon>
                    <View style={Styles.info}>
                        <Text style={Styles.infoHead}>Email</Text>
                        <Text style={Styles.infoData}>example@gmail.com</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default info;