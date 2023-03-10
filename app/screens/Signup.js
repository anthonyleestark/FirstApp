import React from 'react';
import { useState, Component } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default class Signup extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            yourname: "",
            username: "",
            email: "",
            password: "",
            passworddup: "",
            
            // Error Messages
            errFlag: true,
            errConfirmFlag: true,
            errPassword:"Note: Password must have at least 6 and at max 30 characters, and contains both uppercase (A-Z), lowercase letters (a-z) and numbers (0-9).",
            errConfirmPassword: "",

            // Resources
            //imageSource: {uri: 'https://wallpaperaccess.com/full/5792762.jpg'}
            imageSource: require('../resources/IMG_3278.jpg')
        };
    }

    // Event Handlers
    
    async onReturnPassword() {
        let strPassword = this.state.password;
        if (strPassword.length == 0) {
            this.state.errFlag = false;
            this.setState({errPassword: "Password can not be empty"});
        }
        else if (strPassword.length < 6 || strPassword > 20) {
            this.state.errFlag = false;
            this.setState({errPassword: "Password must have 6-20 characters"});
        }
        else {
            var pswSample = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/;
            if (!strPassword.match(pswSample)) {
                this.state.errFlag = false;
                this.setState({errPassword: "Password must contain both uppercase, lowercase letters and numbers."});
            }
            else {
                this.state.errFlag = true;
                this.setState({errPassword: "Password is valid."});
            }
        }
    }

    async onReturnPasswordConfirmation() {
        if (this.state.passworddup != this.state.password) {
            this.state.errConfirmFlag = false;
            this.setState({errConfirmPassword: "Passwords do NOT match"});
        }
        else {
            this.state.errConfirmFlag = true;
            this.setState({errConfirmPassword: "Passwords match"});
        }
    }

    render() {
        return (
            <ImageBackground source={this.state.imageSource} resizeMode="cover" style={styles.backgroundImage}>
            <ScrollView style={styles.sectionContainer}>
                <TextInput editable style={styles.input} 
                        onChangeText={(yourname) => this.setState({yourname})} 
                        /*onEndEditing={onReturnName}*/ 
                        placeholder="Your Name"/>
                <TextInput editable style={styles.input} 
                        onChangeText={(username) => this.setState({username})} 
                        /*onEndEditing={onReturnUsername}*/
                        placeholder="Your Username"/>
                <TextInput editable style={styles.input} 
                        onChangeText={(email) => this.setState({email})} 
                        /*onEndEditing={onReturnEmail}*/ 
                        placeholder="Your E-mail Address"/>
                <TextInput editable style={styles.input} 
                        onChangeText={(password) => this.setState({password})} 
                        onEndEditing={this.onReturnPassword.bind(this)}
                        placeholder="Password"/>
                <Text style={this.state.errFlag ? styles.noteLabel : styles.errorMessage}>{this.state.errPassword}</Text>
                <TextInput editable style={styles.input} 
                        onChangeText={(passworddup) => this.setState({passworddup})} 
                        onEndEditing={this.onReturnPasswordConfirmation.bind(this)}
                        placeholder="Confirm Password"/>
                <Text style={this.state.errConfirmFlag ? styles.noteLabel : styles.errorMessage}>{this.state.errConfirmPassword}</Text>
                <Button style={styles.button} title='Sign Up'/>
            </ScrollView>
            </ImageBackground>
        );
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
    noteLabel: {
        marginBottom: 15,
        fontStyle: 'normal',
        fontSize: 14,
        color:'black'
    },
    errorMessage: {
        marginBottom: 15,
        fontStyle: 'italic',
        fontSize: 14,
        color:'red'
    }
});