const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config');

axios.defaults.baseURL = config.yelp.url;


/* GET home page. */
router.get('/', function(req, res, next) {

    const query = {
        location: 'Redwood City',
        categories: 'icecream',
        limit: 10,
        sort_by: 'rating'
    }

    // forming graphql query for the data
    const data = `{
        search(location: "${query.location}" categories: "${query.categories}" limit: ${query.limit} sort_by: "${query.sort_by}") {
            business {
                name
                photos
                location {
                    formatted_address
                }
                rating
                reviews {
                    id
                    text
                    user {
                        id
                        name
                    }
                }
            }
        }
    }`;

    axios({
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${config.yelp.api_key}`,
            'Content-Type': 'application/graphql'
        },
        data
    })
    .then(response => {
        console.log(response.data.data.search.business);
    })
    .catch(error => {
        console.log(error);
    });
});


module.exports = router;
