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
        <View style={{flexDirection:"row", height:150}}>

            <View style={{, justifyContent:"center", alignItems:"center"}}>
            <Image
             style={{width: 100, height: 100, marginVertical:5}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />
            </View>

            <View>

            </View>

        </View>
    </Card>
    )
}





const styles = StyleSheet.create({

    card:{backgroundColor:"white"}
});

export default ListView;