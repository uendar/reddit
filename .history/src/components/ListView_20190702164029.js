import React from "react";
import {
 Platform,
    StyleSheet,
    Text,
    Image,
    View
} from "react-native";

import {Card, CardItem, Left, Body, Right} from 'native-base';


const ListView = (data) =>{
const dataItem = data.item.data;

return(
    <Card style={StyleSheet.flatten(styles.card)}>
        <View style={{flexDirection:"row", height:140, width:"100%"}}>

            <View style={{justifyContent:"center", alignItems:"center",}}>
            <Image
             style={{width: 110, height: 110, marginVertical:5, marginHorizontal:7}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />
            </View>

            <View style={{flexDirection:"column", }}>
                <View style={{backgroundColor:"pink", flexDirection: 'row'}}>
                    <Text>DATA</Text>
                </View>

                <View style={{backgroundColor:"red"}}>
                  <Text>DATA</Text>
                </View>

                <View style={{backgroundColor:"blue"}}>
                  <Text>DATA</Text>
                </View>
            </View>

        </View>
    </Card>
    )
}





const styles = StyleSheet.create({

    card:{backgroundColor:"white"}
});

export default ListView;