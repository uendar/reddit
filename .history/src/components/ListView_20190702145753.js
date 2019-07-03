import React, {Component} from "react";
import {
    Picker, Platform,
    StyleSheet,
    Text,
    View
} from "react-native";
import PropTypes from "prop-types";


const ListView = ({items = [], selectedValue, style, label, onValueChange, ...attributes}) =>
<View
    style={{flexDirection: 'row', marginTop: 12}}>
    <View style={{justifyContent: 'center'}}>
        <Text style={styles.txt}>{label}</Text>
    </View>
    <View style={{justifyContent: 'center'}}>
        <Picker
            style={[styles.ddlang2, style]}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            {...attributes}>
            {items.map((index) => {
                return (<Picker.Item label={index} value={index} key={index}/>)
            })}
           </Picker>
    </View>
</View>




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