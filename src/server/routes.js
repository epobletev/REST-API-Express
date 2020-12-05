const express = require('express');
const router = express.Router();
const { insertPost,getAllPost,getPostById,modifyPost,deletePost } = require('../controller/post');

router.post('/post/insert', insertPost);
router.get('/post/getAll', getAllPost);
router.get('/post/search/:id', getPostById);
router.patch('/post/update/:id', modifyPost);
router.delete('/post/delete/:id', deletePost);
module.exports = router;



