const express = require('express');
const mongodb = require('mongodb');
const router = express.Router();

router.get('/api/posts', async (req, res) => {
  const posts = await loadCollection();
  const current = posts.db('bon-patron').collection('posts');
  const ObjectId = require('mongodb').ObjectID;
  if(req.query.post){
    let post = await current.find({"_id": ObjectId(req.query.post)}).toArray()
    res.send(post);
  } else if(req.query.category){
    let post = await current.find({"category": req.query.category}).toArray()
    res.send(post);
  } else {
    res.send(await current.find({}).toArray());
  }
  posts.close();
});

router.post('/api/posts', async (req, res) => {
  const posts = await loadCollection();
  const current = posts.db('bon-patron').collection('posts');
  await current.insertOne({
      name: req.body.name,
      address: req.body.address,
      description: req.body.description,
      personalTouch: req.body.personalTouch,
      location: req.body.location,
      category: req.body.category,
      images: req.body.images,
      previewImg: req.body.previewImg,
      cta: req.body.cta
  });
  res.status(201).send();
  posts.close();
});

router.put('/api/posts', async (req, res) => {
  const posts = await loadCollection();
  const current = posts.db('bon-patron').collection('posts');
  const ObjectId = require('mongodb').ObjectID;
  console.log(req.body)
  await current.replaceOne(
      {"_id": ObjectId(req.body._id)}, {
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        personalTouch: req.body.personalTouch,
        location: req.body.location,
        category: req.body.category,
        images: req.body.images,
        previewImg: req.body.previewImg,
        cta: req.body.cta
    }
  );
  res.status(201).send();
  posts.close();
});

router.delete('/api/posts', async (req, res) => {
  const posts = await loadCollection();
  const current = posts.db('bon-patron').collection('posts');
  const ObjectId = require('mongodb').ObjectID;
  await current.deleteOne({"_id": ObjectId(req.body.id)});
  res.status(201).send();
  posts.close();
});

async function loadCollection(){
  const db = await mongodb.MongoClient.connect("mongodb+srv://modisch:MujWs0AJ@cluster0-n4yef.mongodb.net/bon-patron?retryWrites=true&w=majority", {
      useNewUrlParser: true,
  });

  return db;
}

module.exports = router;