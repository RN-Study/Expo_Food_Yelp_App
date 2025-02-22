import { useState, useEffect } from 'react';
import yelp from '../api/yelp';



export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose',
            }
        });
        setResults( response.data.businesses);
        } catch(err) {
            setErrorMessage('Something went wrong');
        }
    };

    // call searchApi when component is first rendered.
    // 
    useEffect( () => {
        searchApi();
    }, []);

    return [ searchApi, results, errorMessage ];
};