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

                <View style={{flexDirection:"row", justifyContent:"flex-end", width:'100%', marginVertical:2, height:18}}>
                    <Text numberOfLines={1} style={{fontSize:15, fontStyle:"italic", paddingHorizontal:3}}>25/05/2015</Text>
                </View>

                <View style={{height:60, justifyContent:'center'}}>
                  <Text numberOfLines={3} style={{fontSize:16, color:"#34495e", textAlign:"center"}}> Reddit is a news website where registered users can submit posts or links to content that other users can vote and comment. Each of these posts is grouped into categories known as "subreddits".</Text>
                </View>

                <View style={{marginVertical:2, width:"99%", flexDirection:'row', height:18}}>
                    <View style={{ width:"50%"}}>
                      <Text numberOfLines={1} style={{fontSize:16, color:'#2c3e50', fontWeight:'500',textAlign:'center', marginRight:2}}>Endar Uliu</Text>
                    </View>

                    <View style={{ width:"24%"}}>
                      <Text numberOfLines={1} style={{fontSize:16, color:'#2c3e50', fontWeight:'500', textAlign:'center'}}>3</Text>
                    </View>

                    <View style={{ width:"26%"}}>
                      <Text numberOfLines={1} style={{fontSize:16, color:'#2c3e50', fontWeight:'500', textAlign:'center',marginLeft:2}}>comment:54</Text>
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