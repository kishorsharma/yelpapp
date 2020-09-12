const express = require('express');
const router = express.Router();
const axios = require('axios');
const config = require('../config');

axios.defaults.baseURL = config.yelp.url;

const businesses = [{"name":"Don Gaspacho Paleteria & Snacks","photos":["https://s3-media4.fl.yelpcdn.com/bphoto/AjZvhwzPldaryKynBQOzyA/o.jpg"],"location":{"address1":"364 W Tennyson Rd","city":"Hayward"},"rating":5.0,"reviews":[{"id":"VTRna6Nsaz_mcAQ8sBpmzw","rating":5,"text":"(Review based on pre-Covid experience)\n\nFantastic small business in the East Bay. I wanted to fill my craving for a mangonada and Don Gaspacho really...","user":{"id":"7TkpoLPokE0Z5BNuGPD0sw","name":"Lisa H."}},{"id":"IgH1lGl4faPduhUGb66s5Q","rating":5,"text":"I came here and was really impressed by the updates they made in order to protect their staff and customers. The service is always friendly and it's my...","user":{"id":"8oYTnZd364lBHJqmEgzC6A","name":"Noemi A."}},{"id":"5DhXzXlkl6yk-iC1Zlijsg","rating":5,"text":"Don Gaspachos is my favorite ice cream spot! I used to live a few blocks over and it was a weekly ritual to grab some ice cream here every summer. I was...","user":{"id":"NLEc2RPQxc0aTwbivVj0Rg","name":"Livier M."}}]},{"name":"It's-It Ice Cream","photos":["https://s3-media3.fl.yelpcdn.com/bphoto/q9pXR0Y-vbYszoTFtkv8Og/o.jpg"],"location":{"address1":"865 Burlway Rd","city":"Burlingame"},"rating":4.5,"reviews":[{"id":"z_e_EfpfxP82kMFhp2bBQA","rating":5,"text":"The best there is!!! Customer service is superb. \nLove It's-It Ice Cream. The only downside is their hour of operations, they close at 5pm and I get off at...","user":{"id":"dbzNcXaJPMLlQM_FNqriIQ","name":"Juvy H."}},{"id":"hgjuy3mt4brZpovVPZFcPg","rating":5,"text":"My guilty pleasure is stopping by here after a meal and grabbing a quick treat. I love this store because you're able to buy single ice cream sandwiches,...","user":{"id":"ruLn-0NmYXpYUjOWtntj7g","name":"Eva L."}},{"id":"vFvKMMwQ9NhjilQ2mva7lA","rating":5,"text":"Who doesn't love It's-It ice cream sandwiches?  You'll find the factory in Burlingame, CA.  If ya don't know, now ya know! \n\nI grew up in SF eating these...","user":{"id":"5UDpc2CMOgbf3GePS6SGVA","name":"Christine R."}}]},{"name":"Romolo's Cannoli","photos":["https://s3-media3.fl.yelpcdn.com/bphoto/AQ6Z0zLo99zZFhuY0vrG9A/o.jpg"],"location":{"address1":"81 37th Ave","city":"San Mateo"},"rating":4.5,"reviews":[{"id":"bgdnV415oHCZBTKqtda8-Q","rating":5,"text":"I was in the Bay Area on business and arranged to get together with my sister and her partner in San Francisco for dinner over the weekend. My sister is the...","user":{"id":"S6gmpZrvppGPRRKTg4tymg","name":"Richard H."}},{"id":"tgBxt9lXkMaEUdKlHvueXQ","rating":5,"text":"I was a little intimidated walking by since I had no idea what a cannoli was (I live under a rock). I looked up a picture of it and it looked delish. Went...","user":{"id":"mhb3VXWvent4u2SKpJQkRw","name":"Alvaro D."}},{"id":"p2cNhj6e3Y1RTM_HVy1Gpg","rating":3,"text":"I would have enjoyed my cannoli more if the employee would not have played with her hair and handled money from a previous customer before she made my...","user":{"id":"0vtQjuJNAdG9dMCMoDi0iw","name":"Jessica C."}}]},{"name":"Pa'Latino","photos":["https://s3-media2.fl.yelpcdn.com/bphoto/pi5eDfp05l9uq3BX_CQw0A/o.jpg"],"location":{"address1":"5696 Thornton Ave","city":"Newark"},"rating":5.0,"reviews":[{"id":"SG8fnRlc4GPKw_hYyOXa_Q","rating":5,"text":"I'm so happy I stumbled upon this place as it's one of Newark's hidden gem for sure! I came here originally looking for some esquite (elote in a cup) which...","user":{"id":"3GKsH8V5kI9iP9LLNx7dnw","name":"Jessica D."}},{"id":"KW0nYcE4gVhyNmP8GXFvsw","rating":5,"text":"This is one of my favorite places to get snacks. Maybe I'm a little biased since I love Mexican snacks? Either way I enjoy this place a lot & I was really...","user":{"id":"KnCIw8XFrb2vXrba8whg2A","name":"Dominick A."}},{"id":"_dRbM1tWomto11-7W2gITw","rating":5,"text":"11/10 customer service! The staff is so welcoming and friendly. The bring a smile to my face everytime I come. They have the BEST mangonada!","user":{"id":"tKOA13VGUg9JHzdYhaxyLg","name":"Tien M."}}]},{"name":"La Michoacana Fruits & Ice Cream","photos":["https://s3-media3.fl.yelpcdn.com/bphoto/t2P_9GN5ptuheZ1DaO6Lsg/o.jpg"],"location":{"address1":"35214 Newark Blvd","city":"Newark"},"rating":4.5,"reviews":[{"id":"n6BEMUt9jFag96yDedjMHg","rating":5,"text":"This is my go to ice cream place! The line is out the door on super hot days. They are taking proper Covid precautions (social distancing, sanitized, masks,...","user":{"id":"juj7VwgxXygGWHvNlYpZhw","name":"Kendra L."}},{"id":"4nRb5MSi2EGlW5Ca6YjPTA","rating":5,"text":"Hands down one of the better Mangonadas in the area. They offer three sizes and honestly the large was a bit much for me and the ratios of fruit and sorbet...","user":{"id":"1Eyv0N_Gx_XonU1BGz5QtQ","name":"Jonathan V."}},{"id":"thkVdsqWQnutIPG_TUax0g","rating":5,"text":"THE MANGONADAS! PERIODT.\n\nThey're punchy--sweet, sour, spicy, and so-so-so refreshing. Hits different on a hot day but will definitely perk up your spirit...","user":{"id":"i34XMCpuzekTM7893xyvMQ","name":"Bonnie T."}}]},{"name":"Sweet Connections","photos":["https://s3-media4.fl.yelpcdn.com/bphoto/I-_W9Fqvtbdqr4cRsWeT5g/o.jpg"],"location":{"address1":"430 San Mateo Ave","city":"San Bruno"},"rating":4.5,"reviews":[{"id":"_xcpZnS8xFhvSrhS4Z46qA","rating":5,"text":"WOW. Every time I go to Sweet Connections I am so delighted by the kindness and helpfulness of the staff! The menu is limited due to Covid, but their \"Build...","user":{"id":"XsbZF7mRAs5b4_-5zD0B1A","name":"Elena Maria S."}},{"id":"XD9IMh58pZKSAVu7XUYFsw","rating":5,"text":"Takeout Packages Available... Call ahead & order from 2 available packages... comes with kid gift card for future order... Credit card only","user":{"id":"mch9Lc-Uau6BqLtgOH8LmQ","name":"Verna B."}},{"id":"HNKbY5v8_XlfRBKpSZAejQ","rating":5,"text":"So a few days ago, I was on San Mateo avenue craving something sweet and I wasn't sure where to go. Delighted by the gorgeous traditional exterior, I...","user":{"id":"8OwahJW9le_xYekKyi41UA","name":"Katie T."}}]},{"name":"Salt & Straw","photos":["https://s3-media1.fl.yelpcdn.com/bphoto/ADe9UFQsjqQQl2p9S92AKQ/o.jpg"],"location":{"address1":"250 University Ave","city":"Palo Alto"},"rating":4.5,"reviews":[{"id":"X_mnEkXt8muuXqT_CamN-g","rating":5,"text":"Once a Portland bucket list destination, Salt & Straw has expanded to several Bay Area locations. I've become a huge fan, the only downside of which is that...","user":{"id":"4jPsIgMZT4_Ks5-myaW9Bg","name":"Edna C."}},{"id":"uzpJdK1kmizCciKh2FMALw","rating":5,"text":"Salt & Straw is definitely a public favorite. At every location (west coast + Miami) there is almost always a line out the door. Despite pandemic times, the...","user":{"id":"m0Wb0S2naPWZ8sQ8m0GDTg","name":"Caroline Y."}},{"id":"jqvmgpSICGs7OXjkSywgTg","rating":5,"text":"Though not as long as pre-pandemic days, you should still expect to line up outside Salt & Straw, with two exceptions: pre-orders and pints.\n\nWe were very...","user":{"id":"dliupsToKzf6Jp2EPUWqOw","name":"Vijay N."}}]},{"name":"Gelataio","photos":["https://s3-media4.fl.yelpcdn.com/bphoto/9Y5KUHXweqiTyWowr0c_MQ/o.jpg"],"location":{"address1":"121 Lytton Ave","city":"Palo Alto"},"rating":4.5,"reviews":[{"id":"R1qC2u7U953kUdyby4u3gQ","rating":5,"text":"Tried the strawberry, watermelon, lemon, and mint chip flavors. The strawberry and watermelon were incredibly fresh! You could taste real fruit. I'm usually...","user":{"id":"GbKMSP-_2izO4ZNvlHuLlQ","name":"Jonica K."}},{"id":"4WoUwMuJfpE_GxGQf-mS0w","rating":1,"text":"Just like the other gentleman that posted on his negative experience at this store two days before my visit, the experience that my friend and I had was...","user":{"id":"EcZpAdfaj9R6IOPa03fEKA","name":"Johnny V."}},{"id":"66HrsGHgZ9_C2t4qAnzEmQ","rating":4,"text":"Gelataio is one of the few Gelato shops in the Bay Area that seems to provide not just quality products but a good experience as well. I have been to the...","user":{"id":"zKjnzaHojLBSXndsW-_W5Q","name":"Angela L."}}]},{"name":"Tin Pot Creamery","photos":["https://s3-media1.fl.yelpcdn.com/bphoto/Ssb4VrKoKwq7h0aRaosFDw/o.jpg"],"location":{"address1":"855 El Camino Real","city":"Palo Alto"},"rating":4.5,"reviews":[{"id":"r6fsI5RbpVrRTXInJ-Px3Q","rating":5,"text":"The best ice cream in the Bay Area, hands down! If you visit during COVID, you won't be able to taste any samples. But every single ice cream we've ordered...","user":{"id":"beUR5S_vG1M61GsoLHsB3A","name":"Sophie S."}},{"id":"_1CKEhihuWDv8eK99-ZQPQ","rating":5,"text":"They are open during Shelter in place and only one person ahead of me when I was there. This is my first time trying Tin Pot and I had the Blue Jasmine Tea...","user":{"id":"x1yUQOEfEl0AkbSrjEbSig","name":"Jennifer W."}},{"id":"caAoCfOhaRLg4HgiuyRZgg","rating":5,"text":"Update! The owner reached out to me after my review to offer me a gift card for the pints that were a bit off. I just wanted to acknowledge what great...","user":{"id":"hOqGHyn63_S88qx_dhuLfw","name":"Fanny W."}}]},{"name":"Simple Delights","photos":["https://s3-media3.fl.yelpcdn.com/bphoto/NC8vRj86cOi6D7VPVLVu_w/o.jpg"],"location":{"address1":"1226 W Hillsdale Blvd","city":"San Mateo"},"rating":5.0,"reviews":[{"id":"CEFGL0GSq8qiXYEGmF3pEA","rating":5,"text":"I'm very excited to have this addition to the neighborhood. I'm glad there's still ice cream and even more excited that there's desserts and coffee!...","user":{"id":"XEL38r_yzp-b-BQvN2nsAQ","name":"Veronica L."}},{"id":"MpNPWALkNrsRgKZsO7n6tg","rating":5,"text":"We tried the ube crinkle cookies, panna cottas, and white pistachio ice cream cake. All were simply delightful! \n\nI need to first RAVE about the UBE crinkle...","user":{"id":"lxjxiip6nG8YCG4QVH_TkA","name":"Amy H."}},{"id":"RvtSrp1CVbuxRxYQMkDUeg","rating":5,"text":"Simple Delights is a small, local ice cream shop run by friendly staff. They are currently only open for takeout but I hope to see it become a neighborhood...","user":{"id":"Z6LJI7Md1Ghsj76XnWUCEg","name":"Krissy W."}}]}];

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

    // sending static response - businesses array
    res.render('index', { businesses });

    // POST call to get Yelp listing using graphql API
    // axios({
    //     method: 'POST',
    //     headers: {
    //         'Authorization': `Bearer ${config.yelp.api_key}`,
    //         'Content-Type': 'application/graphql'
    //     },
    //     data
    // })
    // .then(response => {
    //     console.log(response.data.data.search.business);
    // })
    // .catch(error => {
    //     console.log(error);
    // });
});


module.exports = router;
