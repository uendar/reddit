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
        <View style={{flexDirection:"row", width:'100%', height:140 }}>

            <View style={{justifyContent:"center", alignItems:"center", width:"31%"}}>
            <Image
             style={{width: 100, height: 100, marginVertical:5, paddingHorizontal:5 }}
            source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}  />
            </View>

            <View style={{flexDirection:"column",justifyContent:"center", alignItems:"center", width:'69%'}}>
                <View style={{flexDirection:"row", justifyContent:"flex-end", width:'95%', marginVertical:2}}>
                    <Text numberOfLines={1} style={{fontSize:14, fontWeight:'500'}}>25/05/2015</Text>
                </View>

                <View>
                  <Text numberOfLines={3} style={{fontSize:16, color:"#34495e"}}>Reddit is a news website where registered users can submit posts or links to content that other users can vote and comment. Each of these posts is grouped into categories known as "subreddits".</Text>
                </View>

                <View style={{backgroundColor:"pink",  marginVertical:2, width:"99%", flexDirection:'row'}}>
                    <View style={{ width:"50%"}}>
                      <Text numberOfLines={2} style={{fontSize:16, color:"#34495e"}}>Endar Uliu SADF SDF ASDF ASDF ASDF</Text>
                    </View>

                    <View style={{ width:"25%"}}>
                      <Text numberOfLines={1} style={{fontSize:16, color:"#34495e"}}>3</Text>
                    </View>

                    <View style={{ width:"25%"}}>
                      <Text numberOfLines={1} style={{fontSize:16, color:"#34495e"}}>54</Text>
                    </View>

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