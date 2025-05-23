import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image } from 'react-native';

import Feed from './Feed';
import Search from './Search';
import Profile from './Profile';
import Notifications from './Notifications';
import Menu from './Menu';

export default function HomeScreen() {
    
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name = "Feed" component={Feed}/>
            <Tab.Screen name = "Search" component={Search}/>
            <Tab.Screen name = "Profile" component={Profile}/>
            <Tab.Screen name = "Notifications" component={Notifications}/>
            <Tab.Screen name = "Menu" component={Menu}/>
        </Tab.Navigator>
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