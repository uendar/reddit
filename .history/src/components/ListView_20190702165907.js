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

            <View style={{justifyContent:"center", alignItems:"center", width:"31%"}}>
            <Image
             style={{width: 100, height: 100, marginVertical:5, paddingHorizontal:5 }}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />
            </View>

            <View style={{flexDirection:"column",justifyContent:"center", alignItems:"center", width:'69%', backgroundColor:"yellow"}}>
                <View style={{backgroundColor:"pink", flexDirection:"row"}}>
                    <Text numberOfLines={3}>25/05/2015</Text>
                </View>

                <View style={{backgroundColor:"red"}}>
                  <Text numberOfLines={4}>Reddit is a news website where registered users can submit posts or links to content that other users can vote and comment. Each of these posts is grouped into categories known as "subreddits".</Text>
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