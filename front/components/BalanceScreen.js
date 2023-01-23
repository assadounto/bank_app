import React from "react";
import { Feather } from '@expo/vector-icons'; 
import { ImageBackground, StyleSheet, Pressable, Text,View } from "react-native";

const BalanceScreen = () => {
    return (
        <View>
            <Text style={styles.title}>Your balance</Text>
            <Text style={styles.amount}>{'\u20B5'}0.00</Text>
            <View style={styles.trend}>
              <Feather style={{margin:4}} name="trending-up" size={18} color="green" />
              <Text style={{fontWeight:"700",fontSize:17}}>3.6%</Text>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        color: "black",
        textAlign: "center",
        marginTop: 150,
    },
    amount: {
        fontSize: 50,
        color: "blue",
        textAlign: "center",
        marginTop: 10,
        fontWeight: "900",

    },
    trend: {
        position: "absolute",
        top: 240,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        rowGap: 5,
    }
});
export default BalanceScreen