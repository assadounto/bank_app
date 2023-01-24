import React from "react";
import { StyleSheet, Text,View } from "react-native";

const History = ({key,amount,date,type,bank,name}) => {
    return (

        <View style={styles.card} key={key}>
          <View style={{ width: 50, height: 50, backgroundColor: "blue" }}></View><View>
                    <Text>{date.slice(0,10)}</Text>
                    {name==null||bank==null?<Text>{type}</Text>:
                    <Text>{name} - {bank}</Text>}
                </View><View>
                {type=="transfer" || type== "withdraw"?<Text style={{color:"red"}}>-{'\u20B5'} {amount}</Text >:<Text style={{color:"green"}}t>+{'\u20B5'} {amount}</Text>}
                       
                    </View>
         
      
        </View>

  
    )
}

const styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        height: 100,
        backgroundColor: "white",
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 16,
        padding: 10,
    },
});

export default History