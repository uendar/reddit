import React from "react";
import {
 Platform,
    StyleSheet,
    Text,
    View
} from "react-native";

import {Card, CardItem, Left, Body, Right} from 'native-base';

const ListView = ({items = [], selectedValue, style, label, onValueChange, ...attributes}) =>
    <Card style={StyleSheet.flatten(styles.card)}>
        <CardItem style={StyleSheet.flatten(styles.carditem)}>
            <Left style={{flex: 1.2}}>
                {localdb.picture?
                    <Image source={require('../images/sani.png')} style={styles.thumbnail}/> :
                    <Image source={{
                        uri: getUploadUrl() + localdb.picture + '?fileToken=' + this.props.fileToken,
                        cache: 'force-cache'
                    }} style={styles.thumbnail}/>
                }
            </Left>
            <Body style={StyleSheet.flatten(styles.bodyData)}>
            <Text style={styles.txusers1}>{localdb.name + ' ' + localdb.lastname}</Text>
            <Text>
                <Icon name="map-marker" size={14} color={'#34495e'}/>
                <Text style={styles.txusers2}>{' ' + localdb.birthcity + ', ' + address}</Text>
            </Text>
            <Text>
                <Text style={styles.txusers}>{"Gender: " + gender}</Text>
            </Text>
            </Body>
            <Right style={{flex: 0.5}}>
                <TouchableOpacity style={styles.btn} onPress={() => this.showAlert(localdb, rowID)}>
                    <Icon name="chevron-right" size={15} style={styles.ico}/>
                </TouchableOpacity>
            </Right>
        </CardItem>
    </Card>





const styles = StyleSheet.create({
        ddlang2: Platform.OS !== "ios" ? {
                marginLeft: 15,
                marginRight: 15,
                color: '#2c3e50',
                width: 150,
                height: 50,
            } :
            {

                width: 150,
                alignSelf: 'center',
                justifyContent: 'center',
                marginBottom: 8

            },
        txt: {
            fontSize: 17,
            fontWeight: '500',
            marginLeft: 15,
            marginVertical: 5
        }
    }
);

export default ListView;