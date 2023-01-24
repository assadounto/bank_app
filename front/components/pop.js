import React , {useState} from 'react';
import { StyleSheet, View , Text , Modal , Button,Pressable,ScrollView } from 'react-native';
import History from './History';
export default function Pop({active,setactive,data}) {
  
  return (
    
        <Modal
        animationType="slide"
        transparent={true}
        visible={active}
        onRequestClose={() => {
          console.warn("closed");
        }}
        >
          <View style={styles.container}>
          <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() =>setactive(!active)}>
               <Text style={{fontSize:25,fontWeight:"bold"}}>X</Text></Pressable>
            <Text style={styles.text}>History</Text>
            <ScrollView>
           {data.map((item) => (
          <History key={item.transaction_number} amount={item.amount} date={item.created_at} type={item.transaction_type } bank={item.bank} name={item.name} />
        ))} 
            </ScrollView> 
            </View>
        </Modal>
 
  );
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "white" ,
    height : "100%",
    width : "100%",
  },
  View : {
   
   
    borderRadius : 15,
    padding : 20,
  },
  text : {
    fontSize : 20,
    color : "green",
    marginBottom:20,
    textAlign : "center",

  },
  button : {
    margin : 20,
    width:200,
  }
});

