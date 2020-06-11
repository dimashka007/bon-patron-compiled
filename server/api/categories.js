const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/api/categories', async (req, res) => {
  const categories = await loadCollection();
  const current = categories.db('bon-patron').collection('categories');
  res.send(await current.find({}).toArray());
  categories.close();
});

router.post('/api/categories', async (req, res) => {
  const categories = await loadCollection();
  const current = categories.db('bon-patron').collection('categories');
  await current.insertOne({
      category: req.body.categoryToInsert
  });
  res.status(201).send();
  categories.close();
});

router.delete('/api/categories', async (req, res) => {
  const categories = await loadCollection();
  const current = categories.db('bon-patron').collection('categories');
  await current.deleteOne({
      category: req.body.categoryToDelete
  });
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