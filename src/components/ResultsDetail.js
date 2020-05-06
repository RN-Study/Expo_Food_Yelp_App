import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ results }) => {
    return (
        <View style = {styles.container} >
            <Image
                style = {styles.image}
                source = {{ uri: results.image_url }}
            />
            <Text style = {styles.name} >
                {results.name} 
            </Text>
            <Text style = {{  }} > 
                {results.rating} Stars,
                {results.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        marginLeft: 15,
    },
    image: {
        width: 200,
        height: 150,
        borderRadius: 4,
        marginBottom: 5,
        
    },
    name: {
        fontWeight: "bold",
        fontSize: 14,
        marginTop: 5,

    },
});

export default ResultsDetail;