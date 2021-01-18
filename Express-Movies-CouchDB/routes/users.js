var express = require('express');
var router = express.Router();
const axios = require('axios').default;
const DB_URL = "http://127.0.0.1:5984/movies/";
const DB_VIEWS = "_design/views/_view/";

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get(DB_URL + DB_VIEWS + 'allMovies')
  .then(function (response) {
    //console.log(response.data.rows);
    res.render('list.ejs', { products: response.data.rows });
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });
});
router.get('/add', function(req, res, next) {
  res.render('add.ejs', {});
});
module.exports = router;
