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
        <View style={{flexDirection:"row"}}>

            <View>
                <Image source={require('/react-native/img/favicon.png')}/>
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