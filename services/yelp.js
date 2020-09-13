const axios = require('axios');
const config = require('../config');

axios.defaults.baseURL = config.yelp.url;

// method for getting businesss in a location
exports.getBusinesses = ({ location, categories, limit, sort_by }) => {
    return new Promise((resolve, reject) => {
        // forming graphql query for the data 
        if (location && categories && limit && sort_by) {
            const data = `{
                search(location: "${location}" categories: "${categories}" limit: ${limit} sort_by: "${sort_by}") {
                    business {
                        name
                        photos
                        location {
                            address1
                            city
                        }
                        rating
                        reviews {
                            id
                            text
                            rating
                            user {
                                id
                                name
                            }
                        }
                    }
                }
            }`;
    
            //POST call to get Yelp listing using graphql API
            axios({
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${config.yelp.api_key}`,
                    'Content-Type': 'application/graphql'
                },
                data
            }).then((response) => {
                resolve(response.data.data.search.business)
            }).catch((error) => {
                reject(error);
            });
        } else {
            reject(err);
        }
        
    });
}
