var express = require('express');
var router = express.Router();


const postController = require('../controller/post.controller')

router.post('/post', postController.createPost);
router.get('/post', postController.getPostsUser);

module.exports = router;
