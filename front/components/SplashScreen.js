import React,{useContext} from "react";
import { ImageBackground, StyleSheet, Pressable, Text,View } from "react-native";
import { Context } from "./auth";


const image = { uri: "./assets/icon.png" };

const Splash = ({navigation}) => {
    const {state} = useContext(Context);
 
    return(
    <View style={styles.container}>
        <ImageBackground source={require("../assets/login2.png")} resizeMode="cover" style={styles.image}>
          <Pressable style={styles.login} onPress={() => state.token ? navigation.navigate("Tabs"):navigation.navigate("login") } >
            <Text style={styles.text}>Login</Text>
         </Pressable>
        </ImageBackground>
    </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        fontSize: 25,
        lineHeight: 84,
        fontWeight: "bold",
        borderRadius: 10,
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