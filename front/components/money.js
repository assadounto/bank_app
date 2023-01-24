import React,{useState,useContext} from "react";
import { Alert, StyleSheet, Pressable, Text,View,TextInput } from "react-native";
import CustomSwitch from "./custom/CustomSwitch";
import { Feather } from '@expo/vector-icons'; 
import { SelectList } from 'react-native-dropdown-select-list'
import axios from "axios";
import {Context as AuthContext} from "./auth"

const Form =()=> {
    const {state} = useContext(AuthContext);
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const [amtval,setamtval]=useState("0.00")
    const [type,setType]=useState("transfer")
    const [name,setName]=useState("")
    const[acc,setAcc]=useState("")
    const [selected, setSelected] = useState("");
    const[success,setSuccess]=useState(false)
   
    const data = [
        {key:'1', value:'CalBank'},
        {key:'2', value:'Access Bank'},
        {key:'3', value:'GTBank'},
    ]
  
    const handleSubmit = ({navigation}) => {
      
    
        axios.post("http://192.168.42.153:3000/api/v1/new_transaction",{
            amount:amtval,
            transaction_type:type,
            name:name,
            destination_account_id:acc,
            bank: selected,
        },{
            headers:{
                'Content-Type': 'application/json',         
                "Authorization": state.token

                }
            }).then((res)=>{
                if (res.status==200){
                    Alert.alert("Transaction Successful")
                    navigation.replace("Tabs")

                }
            }).catch((err)=>{
            })
    }
       
    
    const onSelectSwitch = index => {
        index==1 ? setType("deposit"):setType("transfer")
      };
    return (
        <View>
            <View style={{alignItems: 'center'}}>
      <View style={{alignItems: 'center', margin: 20}}>
        <CustomSwitch
          selectionMode={2}
          roundCorner={true}
          option1={'Deposit'}
          option2={'Send'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'blue'}
        />
      </View>
    </View>
        <View style={{width:300,height:200,backgroundColor:"blue",borderRadius:10}}>
        <Text style={{textAlign:"center",color:"white",fontSize:15,marginTop:50}}>Enter Amount</Text>
        <TextInput style={styles.value} value={amtval} onChangeText={(val)=> setamtval(val)} />
            <View style={{display: "flex",flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginBottom:100}}>
            
            <Pressable onPress={(val)=>setamtval(val)}>
                <Text style={{fontSize:25}}>10</Text></Pressable>
            <Pressable><Text style={{fontSize:25}}>100</Text></Pressable>
            <Pressable><Text style={{fontSize:25}}>100</Text></Pressable>
            </View>

        </View>
       <View>


       
         </View>
         <View>
         <TextInput onChangeText={(val)=>setName(val)}  style={[styles.input]} placeholder="Name" />
         </View>
               
                
                <SelectList 
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        defaultOption={data[0]}
       Placeholder="Search"
    />
     <View>
    <TextInput onChangeText={(val)=>setAcc(val)} style={[styles.input]} placeholder="Enter account number" />
    </View>
     <View style={{width:50,height:50,backgroundColor:"blue",borderRadius:10,padding:12,alignSelf:"center"}}>
        <Feather name="send" size={24} color="black" onPress={handleSubmit} />
     </View>
</View>
    
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginBottom: 15,
        marginTop: 15,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
    },
    value: {
      height:60,
      fontSize: 40,
      textAlign:"center",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      dropdown2BtnStyle: {
        width: '80%',
        height: 50,
        borderRadius: 8,
      },
});


export default Form




