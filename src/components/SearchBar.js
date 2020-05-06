import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style = {styles.backGround} >
            <Feather name = "search" style = {styles.iconStyle} />
            <TextInput
                autoCapitalize = "none"
                autoCorrect = {false}
                style = {styles.inputStyle} 
                placeholder = " Business Search"
                value = {term}
                onChangeText = { onTermChange }
                onEndEditing = { onTermSubmit }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backGround: {
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10,
    },
    inputStyle: {
        fontSize: 20,
        borderColor: 'black',
        // borderWidth: 1,
        flex: 1,
    },
    iconStyle: {
        fontSize: 30,
        alignSelf: "center",
        marginHorizontal: 15,
    },

});

export default SearchBar;