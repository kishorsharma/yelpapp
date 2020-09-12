const config = {
    environment: process.env.NODE_ENV || 'dev',
    server: {
        port: process.env.PORT || 8080,
    },
    yelp: {
      api_key:'C0PTawo2wP4Ezz08ujEx_yAp6WLiUEGBUqPJOewRo9QEPTLJ66zYBVq9Go_YPeUY2YvwId2sJHoHhBBtrX6yKUcxAAeUkGc7aj2319KWG8kT2b3R0vZGbr5UN7NbX3Yx',
      url: 'https://api.yelp.com/v3/graphql'
    }
};

module.exports = config;
