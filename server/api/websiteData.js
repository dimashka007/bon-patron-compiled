const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/api/data', async (req, res) => {
  const data = await loadCollection();
  const current = data.db('bon-patron').collection('data');
  res.send(await current.find({}).toArray());
  data.close();
});

router.put('/api/data', async (req, res) => {
  const data = await loadCollection();
  const current = data.db('bon-patron').collection('data');
  await current.updateOne(
    {type: 'mainText'}, {$set: {text: req.body.mainText}}
  );
  await current.updateOne(
    {type: 'subText'}, {$set: {text: req.body.subText}}
    );
  res.status(201).send();
  data.close();
});

async function loadCollection(){
  const db = await mongodb.MongoClient.connect("mongodb+srv://modisch:MujWs0AJ@cluster0-n4yef.mongodb.net/bon-patron?retryWrites=true&w=majority", {
      useNewUrlParser: true,
  });

  return db;
}

module.exports = router;