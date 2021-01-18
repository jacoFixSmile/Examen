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
router.get('/searchName',function(req, res, next) {
  res.render('search.ejs', {});
});
router.get('/searchActorName',function(req, res, next) {
  res.render('searchActorName.ejs', {});
});
/* FIND A movie */
router.post('/searchName', (req, res) => {
  console.log(DB_URL + DB_VIEWS + 'allMovies' + '?key="' + req.body.name + '"');
  console.log("post to search")
  axios.get(DB_URL + DB_VIEWS + 'allMovies' + '?key="' + req.body.name + '"')
    .then(function (response) {
      console.log(response.data.rows[0]);
      if(response.data.rows[0]){
        console.log('data well found')
        res.render('search_result.ejs', { products: response.data.rows[0].value.actors });
        console.log(response.data.rows[0].value.actors )
      } else{
        res.render('search_not_found.ejs', {})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
})
// find a actor
router.post('/searchActorName', (req, res) => {
  console.log(DB_URL + DB_VIEWS + 'allMovies' + '?key="' + req.body.name + '"');
  console.log("post to search")
  axios.get(DB_URL + DB_VIEWS + 'zoekFilmBijActeur' + '?key="' + req.body.name + '"')
    .then(function (response) {
      console.log(response.data.rows);
      if(response.data.rows[0]){
        console.log('data well found')
        res.render('search_result_actor.ejs', { products: response.data.rows });
      } else{
        res.render('search_not_found.ejs', {})
      }
    })
    .catch(function (error) {
      console.log(error);
    })
})
module.exports = router;
