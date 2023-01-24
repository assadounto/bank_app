import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import {Context as AuthContext} from './auth'

const Profile = ({navigation}) => {
  const {state, signout} = useContext(AuthContext);

  const Signout=()=>{
    signout()
    navigation.replace("login")
  }
  return (
    <View style={styles.master}>
      <Text style={styles.header}>Heya</Text>
      <Button onPress={Signout} title="Ready to Sign out?" type="clear"  />
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    marginBottom: 8,
  },
});

export default Profile