import React,{useContext} from "react";
import { Ionicons } from '@expo/vector-icons'; 
import {  StyleSheet, Pressable, Text,View,ScrollView } from "react-native";
import BalanceScreen from "./BalanceScreen";
import History from "./History";
import { useEffect,useState } from "react";
import { Context } from "./auth";
import axios from "axios";
import Pop from "./pop";


const MainScreen = () => {
  
    const [active , setactive] = useState(false);
    const {state,getHistory} = useContext(Context);
    const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [balance, setBalance] = useState(0);
    useEffect(() => {

        const data = axios.get('http://192.168.42.153:3000/api/v1/history', {
            headers: {
                'Content-Type': 'application/json',         
                 "Authorization": state.token
            },
        }).then((response) => {
            console.log(response.data.history);
            setData(response.data.history);
            setBalance(response.data.balance);
        }).catch((error) => console.error(error))
        ;
    }, []);
    return (
        <>
       
        <ScrollView>
   
            <Pop active={active} setactive={setactive} data={data} />
            <Ionicons style={styles.ham} name="ios-menu" size={24} color="blue" />
            <Ionicons style={styles.notify} name="notifications" size={24} color="blue"/>
            <BalanceScreen balance={balance} />
          <View style={{marginTop:30,marginLeft:30,display:"flex",flexDirection:"row"}}>
            <Text style={{marginRight:10,fontSize:20,fontWeight:"bold"}}>History</Text> 
            <Pressable style={styles.button} onPress={() =>setactive(!active)}><Text style={
                {color:"blue",fontWeight:"500",marginTop:5,fontSize:12,borderRadius:12, width:50,textAlign:"center",borderColor:"blue",borderWidth:1}
            }>More</Text></Pressable>
            
          </View>
          {data.slice(0,3).map((item) => (
            <History key={item.transaction_number} amount={item.amount} date={item.created_at} type={item.transaction_type} bank={item.bank} name={item.name} />
          ))}                       
        </ScrollView>
         
        </>
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