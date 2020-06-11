const express = require('express')
var bodyPaprses = require("body-parser")
var cors = require("cors")
const multer = require('multer')
let fs = require('fs-extra')
const path = require('path')
const app = express()

app.use(bodyPaprses.json());
app.use(cors());

const categories = require('./api/categories');
const posts = require('./api/posts');
const suggestedPosts = require('./api/suggestedPosts');
const websiteData = require('./api/websiteData');

app.use(categories);
app.use(posts);
app.use(suggestedPosts);
app.use(websiteData);

if(process.env.NODE_ENV === 'production'){
  // stativ folder
  app.use(express.static(path.join(__dirname, '../dist/')))

  app.get(/.*/, (req,res) => res.sendFile(path.join(__dirname, '../dist/index.html')));
}
else{
  app.use(express.static(path.join(__dirname, '../dist/')))

  app.get(/.*/, (req,res) => res.sendFile(path.join(__dirname, '../dist/index.html')));
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));