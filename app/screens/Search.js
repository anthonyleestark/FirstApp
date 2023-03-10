import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Search() {
    return (
        <View style={styles.mainViewContainer}>
            <Text style={styles.title}>This is the Search Tab</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mainViewContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontFamily: "Arial",
        fontSize: 30,
        color: "red",
        marginVertical: 10
    },
});