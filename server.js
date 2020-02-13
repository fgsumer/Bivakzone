const express = require('express');
const Comment = require('./model');
const cors = require('cors');
const path = require('path');

// const Db = require('./db');

const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection
  .once('open', () => {
    console.log('MongoDB database connection established successfully');
  })
  .catch(err => console.log(err));

app.get('/', async (req, res) => {
  try {
    const comment = await Comment.find();
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

app.get('/comment/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const comment = await Comment.find({ bivakId: `${id}` });
    res.json(comment);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client-side/build/index.html'));
});

app.post('/comment', async (req, res) => {
  const { name, message } = req.body;
  const bivakId = req.body.id;
  const comment = new Comment({ bivakId, name, message });
  console.log(comment);

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

app
  .use(express.static(path.join(__dirname, 'client-side/build')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(port, () => console.log(`Listening on port ${port}`));
