import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail'
import ResultsShowScreen from '../screens/ResultsShowScreen';

const ResultsList = ({ title, results, navigation }) => {
    if( !results.length) {
        return null;
    }

    return (
        <View style = {styles.container} >
            <Text style = {styles.titleStyle}> { title } </Text>
            {/* <Text> Results: { results.length } </Text> */}
            <FlatList
                horizontal = {true}
                showsVerticalScrollIndicator = {false}
                data = {results}
                keyExtractor = {(results) => results.id}
                renderItem = { ({ item }) => {
                    return (
                        <TouchableOpacity 
                            onPress = {() =>
                                navigation.navigate('ResultsShow', {id: item.id} ) } >
                            <ResultsDetail results = {item} />
                        </TouchableOpacity>
                    );
                }}

            />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 5,
    },
    container: {
        // marginLeft: 10,
    },
});

export default withNavigation( ResultsList );