import axios from 'axios';

const apiKey = 'bwRYl4dcYJUFIywq4KmPrAwYEzqDciFhr1JlXCR3iVyv0nRnVkR3zPFrfM6KW7G3hGqQVicdYr7VeyUNtkvogSfIYUK5uhP1-yxDoqQN5riUuJhf2Q4pjw1Ne6tGXnYx';
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: `Bearer ${apiKey}`,
    }
});

