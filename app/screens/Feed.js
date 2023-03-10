import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Feed() {
    
    const imageSource = require("../resources/stupid-icon.png");

    return (
        <View style={styles.mainViewContainer}>
            <Image style={styles.icon} source={imageSource}/>
            <Text style={styles.title}>Welcome to the Stupid App</Text>
            <Text style={styles.contentText}>This is the app's homescreen, where we show everything we have to you after you logged in. 
                We will update more features in the future</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainViewContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        width: 100,
        height: 100,
        marginVertical: 30
    },
    title: {
        fontFamily: "Arial",
        fontSize: 30,
        color: "red",
        marginVertical: 10
    },
    contentText: {
        fontFamily: "Arial",
        fontSize: 20,
        color: "blue",
        marginHorizontal: 15,
        marginVertical: 10
    },
    // hyperLink: {
    //     flexDirection: "row",
    //     padding: 5,
    // },
    // label: {
    //     fontSize: 20,
    //     fontFamily: "Arial",
    // },
    // link: {
    //     alignItems: 'center',
    //     fontSize: 20,
    //     fontFamily: "Arial",
    //     color: "blue"
    // }
  });