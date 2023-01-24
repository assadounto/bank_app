import React,{useContext} from "react";
import {StyleSheet, Pressable, Text,View,TextInput,Button,TouchableOpacity} from "react-native";
import {Input,Icon} from 'react-native-elements';
import { useState } from "react";
import { Context } from "./auth";
import axios from "axios";



const Loginscreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin} = useContext(Context);

  const Signin = async () => {
       axios.post('http://192.168.42.153:3000/api/v1/login', {
            email: email,
            password: password,
        }).then((response) => {
            console.log(response.data.jwt);
            signin(response.data.jwt)
            if (response.data.jwt) {
              navigation.replace('Tabs')
            }
            ;
        }).catch((error) => console.error(error))
        ;
  };


  return (
    <View style={styles.master}>
      <Text style={styles.header}>Auth Demo</Text>
      <Input
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        leftIcon={<Icon name="envelope" type="font-awesome" size={24} />}
      />
      <Input
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        leftIcon={<Icon name="key" type="font-awesome" size={24} />}
        secureTextEntry
      />
      <Button
        title="Login"
        type="clear"
        onPress={() => {
          Signin()
          ;
        }}
      />
      <View style={styles.link}>
        <Text style={styles.text}>Dont have an account? </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.text}>Sign up Here.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    padding: 16,
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  header: {
    fontSize: 32,
    marginBottom: 18,
    alignSelf: 'center',
  },
  text: {
    fontSize: 16,
    marginTop: 16,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default Loginscreen;