const express = require('express');
const router = express.Router();

// Load Post model
const Post = require('./models/Post');

router.get('/test', (req, res) => res.send('post route testing!'));

// @route GET api/posts
// @description Get all posts
// @access Public
router.get('/posts', (req, res) => {
  Post.find().sort({"date_posted": -1})
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route GET api/posts/:id
// @description Get single post by id
// @access Public
router.get('/posts/:id', (req, res) => {
  Post.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ nopostsfound: 'No posts found' }));
});

// @route GET api/posts
// @description add/save post
// @access Public
router.post('/posts', (req, res) => {
  Post.create(req.body)
    .then(post => res.json({ msg: 'Post added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this post' }));
});

module.exports = router;
