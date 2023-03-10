import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export default function ActiveScreen({navigation}) {

    const imageSource = require("../resources/stupid-icon.png");

    return (
        <View style={styles.mainViewContainer}>
            <Image style={styles.icon} source={imageSource}/>
            <View style={styles.hyperLink}>
                <Text style={styles.label}>Before you continue, </Text>
                <Text style={styles.link} onPress={() => navigation.navigate("Signup")}>create a new account</Text>
            </View>
            <View style={styles.hyperLink}>
                <Text style={styles.label}>Already have an account? </Text>
                <Text style={styles.link} onPress={() => navigation.navigate("Login")}>Login</Text>
            </View>
            <View style={styles.bottomViewContainer}>
                <Text style={styles.link} onPress={() => navigation.navigate("HomeScreen")}>Use as Guest</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainViewContainer: {
        flex: 1,
        marginVertical: 150,
        alignItems: "center",
        justifyContent: "center",
       // backgroundColor: "pink"
    },
    bottomViewContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    icon: {
        width: 100,
        height: 100,
        marginVertical: 30
    },
    hyperLink: {
        flexDirection: "row",
        padding: 5,
    },
    label: {
        fontSize: 20,
        fontFamily: "Arial",
    },
    link: {
        alignItems: 'center',
        fontSize: 20,
        fontFamily: "Arial",
        color: "blue"
    },
    // footer: {
    //     position: 'absolute',
    //     height: 40,
    //     left: 0, 
    //     top: WINDOW_HEIGHT - 40, 
    //     width: WINDOW_WIDTH,
    // }
});