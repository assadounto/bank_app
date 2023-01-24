import React from "react";
import { Feather } from '@expo/vector-icons'; 
import {StyleSheet, Text,View,ScrollView } from "react-native";

const BalanceScreen = ({balance}) => {
    return (
        <ScrollView>
            <Text style={styles.title}>Your balance</Text>
            <Text style={styles.amount}>{'\u20B5'}{balance}</Text>
            <View style={styles.trend}>
              <Feather style={{margin:4}} name="trending-up" size={18} color="green" />
              <Text style={{fontWeight:"700",fontSize:17}}>3.6%</Text>
            </View>
        </ScrollView>
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
        marginBottom: 30,
        alignSelf: "center",
        display: "flex",
        flexDirection: "row",
        rowGap: 5,
    }
});
export default BalanceScreen