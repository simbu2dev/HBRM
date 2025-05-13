const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

router.post('/register', register);
router.post('/login', login);

// Example protected route
router.get('/admin', authenticate, authorize('delete'), (req, res) => {
    res.send('Welcome Admin!');
});

module.exports = router;
