import React from "react";
import {
    StyleSheet,
    Text,
    Image,
    View
} from "react-native";
import {Card} from 'native-base';

var dateFormat = require('dateformat');





const ListView = ({thumbnail, created, title, author, score, num_comments}) =>{
    return(

        <Card style={StyleSheet.flatten(styles.card)}>
            <View style={{flexDirection:"row", width:'100%', height:110 }}>

                <View style={{justifyContent:"center", alignItems:"center", width:"31%"}}>
                    {thumbnail!=='self'?
                    <Image
                    style={{width: 100, height: 100, marginVertical:5, paddingHorizontal:5 }}
                    source={{uri:thumbnail}} />
                    :
                    <Image
                     style={{width: 100, height: 100 }}
                     source={require('../images/reddit.png')}/>}

                </View>

                <View style={{flexDirection:"column",justifyContent:"center", alignItems:"center", width:'69%'}}>

                    <View style={{flexDirection:"row", justifyContent:"flex-end", width:'100%', marginVertical:2, height:18}}>
                        <Text numberOfLines={1} style={{fontSize:15, fontStyle:"italic", paddingHorizontal:10}}>{dateFormat((created), "dd/mm/yyyy")}</Text>
                    </View>

                    <View style={{height:60, justifyContent:'center'}}>
                    <Text numberOfLines={3} style={{fontSize:16, color:"#34495e", textAlign:"center"}}>{title}</Text>
                    </View>

                    <View style={{marginVertical:2, width:"99%", flexDirection:'row', height:18}}>
                        <View style={{ width:"50%"}}>
                        <Text numberOfLines={1} style={{fontSize:16, color:'#2c3e50', fontWeight:'500',textAlign:'center', marginRight:2}}>{author}</Text>
                        </View>

                        <View style={{ width:"24%"}}>
                        <Text numberOfLines={1} style={{fontSize:16, color:'#2c3e50', fontWeight:'500', textAlign:'center'}}>{score}</Text>
                        </View>

                        <View style={{ width:"26%"}}>
                        <Text numberOfLines={1} style={{fontSize:16, color:'#2c3e50', fontWeight:'500', textAlign:'center',marginLeft:2}}>{num_comments}</Text>
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