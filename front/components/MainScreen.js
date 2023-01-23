import React from "react";
import { Ionicons } from '@expo/vector-icons'; 
import { ImageBackground, StyleSheet, Pressable, Text,View } from "react-native";
import BalanceScreen from "./BalanceScreen";


const MainScreen = () => {
    return (
        <View>
            <Text>main</Text>
            <Ionicons style={styles.ham} name="ios-menu" size={24} color="blue" />
            <Ionicons style={styles.notify} name="notifications" size={24} color="blue"/>
            <BalanceScreen />
        </View>
        
    )
}

const styles = StyleSheet.create({
    notify: {
        position: "absolute",
        top: 70,
        right: 40,
    },
    ham: {
        position: "absolute",
        top: 70,
        left: 40,
    },
});

export default MainScreen