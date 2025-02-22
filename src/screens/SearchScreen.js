import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    // console.log(props);
    const [term, setTerm] = useState('');
    const [ searchApi, results, errorMessage ] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter( results => {
            return results.price === price;
        });
    };

    return (
        <View style = {{ flex: 1 }} >
            <SearchBar
                term = {term}
                onTermChange = { setTerm }
                onTermSubmit = { () => searchApi(term) }
                />
            {/* <Text style = {styles.textStyle}> We have found {results.length} results </Text> */}
            { errorMessage ? <Text> {errorMessage} </Text> : null }
            <ScrollView>
                <ResultsList 
                    // navigation = {navigation}
                    results = { filterResultsByPrice ('$') }
                    title = "Cost Effective" />
                <ResultsList 
                    // navigation = {navigation}
                    results = { filterResultsByPrice ('$$') }
                    title = "Bit Pricier" />
                <ResultsList 
                    // navigation = { navigation }
                    results = { filterResultsByPrice ('$$$') }
                    title = "Big Spender" />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 20,
        marginLeft: 15,
    },

});

export default SearchScreen;