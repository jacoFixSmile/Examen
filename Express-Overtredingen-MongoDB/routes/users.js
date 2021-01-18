var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var db;
MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology: true}, (err, database) => {
  if (err) return console.log(err)
  db = database.db('examen')
  /* GET ALL PRODUCTS */
  router.get('/', (req, res) => {
    db.collection('overtredingen').find().toArray((err, result) => {
      if (err) return
      res.json(result)
    })
  })
  router.post('/searchOne', (req, res) => {
    var query = { opnameplaats_straat: req.body.opnameplaats_straat }
    db.collection('overtredingen').find(query).toArray((err, result) => {
     if (err) return
     res.json(result)
   })
  })
  router.post('/searchSpeedNonGTE', (req, res) => {
    var query = { aantal_overtredingen_snelheid: { $gte: req.body.aantal_overtredingen_snelheid } }
    db.collection('overtredingen').find(query).toArray((err, result) => {
     if (err) return
     res.json(result)
   })
  })
})



module.exports = router;
