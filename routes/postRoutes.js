const express = require('express');
const router = express.Router();
const postControllers = require('../controllers/postControllers');

router.get('/',  postControllers.getAllPosts);

router.get('/test', postControllers.test);

module.exports = router