const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/api/suggested', async (req, res) => {
  const categories = await loadCollection();
  const current = categories.db('bon-patron').collection('suggested');
  res.send(await current.find({}).toArray());
  categories.close();
});

router.post('/api/suggested', async (req, res) => {
  const categories = await loadCollection();
  const current = categories.db('bon-patron').collection('suggested');
  await current.insertOne({
      name: req.body.postToSuggest.name,
      email: req.body.postToSuggest.email,
      description: req.body.postToSuggest.description
  });
  res.status(201).send();
  categories.close();
});

router.delete('/api/suggested', async (req, res) => {
  const categories = await loadCollection();
  const current = categories.db('bon-patron').collection('suggested');
  const ObjectId = require('mongodb').ObjectID;
  await current.deleteOne({"_id": ObjectId(req.body.id)});
  res.status(201).send();
  categories.close();
});

async function loadCollection(){
  const db = await mongodb.MongoClient.connect("mongodb+srv://modisch:MujWs0AJ@cluster0-n4yef.mongodb.net/bon-patron?retryWrites=true&w=majority", {
      useNewUrlParser: true,
  });

  return db;
}

module.exports = router;