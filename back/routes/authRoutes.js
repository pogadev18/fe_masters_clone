const { Router } = require('express');
const router = Router();

const { signup_post, login_post } = require('../controllers/authController');

router.post('/api/signup', signup_post);
router.post('/api/login', login_post);

module.exports = router;
