import React from "react";
import {
 Platform,
    StyleSheet,
    Text,
    View
} from "react-native";

import {Card, CardItem, Left, Body, Right} from 'native-base';

const ListView = ({data}) =>
    <Card style={StyleSheet.flatten(styles.card)}>
        <Text>{data.author_fullname}</Text>
    </Card>





const styles = StyleSheet.create({

    card:{backgroundColor:"white"}
});

export default ListView;