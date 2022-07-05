const express= require('express');

const router =express.Router();
const blogController =require('../controllers/blogController')

router.get('/posts',blogController.showPost);
router.get('/demo',blogController.demo);
router.post('/createPost',blogController.createPost);

module.exports=router;