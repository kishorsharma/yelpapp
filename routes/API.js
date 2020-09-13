const express = require('express');
const router = express.Router();
const yelp = require('../services/yelp');

/* GET home page. */
router.get('/', function(req, res, next) {

    const location = 'Redwood City'

    yelp.getBusinesses({
        location,
        limit: 10,
        sort_by: 'rating',
        categories: 'icecream'
    })
    .then(businesses => {
        res.status(200).send({ success: true, result: { businesses, location } });
    })
    .catch(error => {
        res.status(500).send({ message: 'Something Went Wrong!', error })
    });
});


module.exports = router;
