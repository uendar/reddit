import React from "react";
import {
 Platform,
    StyleSheet,
    Text,
    View
} from "react-native";

import {Card, CardItem, Left, Body, Right} from 'native-base';
import console = require("console");


const ListView = (data) =>{
const dataItem = data.item.data;
console.log(dataItem)
return(
    <Card style={StyleSheet.flatten(styles.card)}>

    </Card>
    )
}





const styles = StyleSheet.create({

    card:{backgroundColor:"white"}
});

export default ListView;