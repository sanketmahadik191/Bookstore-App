const express = require('express');
const {signUp ,signIn ,updateUser} = require('../controllers/user.controller')
const app = express();

const router = express.Router();

router.post('/signUp',signUp);
router.post('/signIn',signIn);
router.post('/updateProfile',updateUser);

module.exports = router;