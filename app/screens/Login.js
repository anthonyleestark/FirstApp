import React from 'react';
import { useState, Component } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    render({navigation}) {
        return (
            <ScrollView style={styles.sectionContainer}>
                <TextInput editable style={styles.input} 
                        onChangeText={(username) => this.setState({username})} 
                        placeholder="Your Username"/>
                <TextInput editable style={styles.input} 
                        onChangeText={(password) => this.setState({password})} 
                        placeholder="Password"/>
                <Button style={styles.button} title="Login"/>
                <Text style={styles.link} onPress={() => navigation.navigate("HomeScreen")}>Use as Guest</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        marginVertical: 20,
        paddingHorizontal: 24,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        marginVertical: 10,
        padding: 16,
        fontSize: 14,
        borderWidth: 2,
        backgroundColor: 'white'
    },
    button: {
        width: "50%"
    },
    link: {
        alignItems: 'center',
        fontSize: 20,
        fontFamily: "Arial",
        color: "blue"
    }
});