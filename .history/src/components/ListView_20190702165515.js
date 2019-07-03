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
        <View style={{flexDirection:"row", width:'100%' }}>

            <View style={{justifyContent:"center", alignItems:"center", width:"35%"}}>
            <Image
             style={{width: 100, height: 100, marginVertical:5, marginHorizontal:7}}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />
            </View>

            <View style={{flexDirection:"column",justifyContent:"center", alignItems:"center", width:'65%'}}>
                <View style={{backgroundColor:"pink", flexDirection:"row"}}>
                    <Text>DATA asdasd asd asd asd asaasdasda sdfas as dfasd fas d sfasdf asdf asdf asdf asdf asf asdfa dadasdasdasdasdasdasdasdasdasdsfsdfsdfsdfsdfsfsdfasfasdfasdfsfasdfasfasdfasdfasdfasdasf</Text>
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