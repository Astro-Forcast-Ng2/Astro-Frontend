const express = require('express');
const router = express.Router();


// declare axios for making http requests
var axios = require('axios');
var API = 'https://astral-forcast.herokuapp.com/astral/bodies';

/* GET api listing. */
router.get('/', function (req, res) {
  res.send('api worksafsdadsf');
});

router.get('/posts', function (req, res) {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(API)
    .then(function (posts) {
      res.status(200).json(posts.data);
    })
    .catch(function (error) {
      res.status(500).send(error)
    });
});
module.exports = router;
