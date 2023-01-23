import React from "react";
import { ImageBackground, StyleSheet, Pressable, Text,View } from "react-native";

const image = { uri: "./assets/icon.png" };

const Splash = ({navigation}) => (
    <View style={styles.container}>
        <ImageBackground source={require("../assets/splash.png")} resizeMode="cover" style={styles.image}>
          <Pressable style={styles.login} onPress={() => navigation.navigate("Main")} >
            <Text style={styles.text}>Login</Text>
         </Pressable>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 17,
        lineHeight: 84,
        fontWeight: "bold",
    },
    login: {
        borderRadius: 10,
        padding: 10,
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
        margin: 25,
    },
});

export default Splash;