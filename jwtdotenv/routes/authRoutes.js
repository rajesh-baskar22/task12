const express = require('express');
const router = express.Router();
const {registerUser,loginUser,getUserInfo,} = require('../controller/authController');
const authMiddleware =require('../middleware/authMiddleware');

router.post('/register',registerUser);
router.post('/login',loginUser);
router.get('/user',authMiddleware,getUserInfo);


module.exports = router;