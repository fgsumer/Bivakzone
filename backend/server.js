const express = require('express');
const Comment = require('./model');
const cors = require('cors')
const Db = require('./db');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', async (req, res)=>{
    try {
        const comment = await Comment.find();
        res.json(comment);
      } catch (error) {
        res.status(400).json({
          message: error.message
        })
      }
});

app.post('/comment', async (req, res)=> {
    const {name, message} = req.body;
    const comment = new Comment ({name, message});

    try {
        const newComment = await comment.save()
        res.status(201).json(newComment);
    } catch (error) {
        res.status(404).json({
            message: error.message
          })
    }
});

app.listen(8000, ()=>console.log('Server running on port 8000'))