import React from "react";
import {
    Dimensions ,
    StyleSheet,
    Text,
    Image,
    View
} from "react-native";
import {Card, CardItem, Left, Body, Right} from 'native-base';
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const ListView = (data) =>{
const dataItem = data.item.data;

return(
    <Card style={StyleSheet.flatten(styles.card)}>
        <View style={{flexDirection:"row", }}>

            <View style={{justifyContent:"center", alignItems:"center"}}>
            <Image
             style={{width: 110, height: 110, marginVertical:5, marginHorizontal:7}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />
            </View>

            <View style={{flexDirection:"column",justifyContent:"center", alignItems:"center", height: 140}}>
                <View style={{backgroundColor:"pink", height:30}}>
                    <Text>DATA asdasd asd asd asd asaasdasdadadasdasdasdasdasdasdasdasdasdsfsdfsdfsdfsdfsfsdfasfasdfasdfsfasdfasfasdfasdfasdfasdasf</Text>
                </View>

                <View style={{backgroundColor:"red",height:48}}>
                  <Text>DATA</Text>
                </View>

                <View style={{backgroundColor:"blue",height:30}}>
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