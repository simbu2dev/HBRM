const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth.controller');
const {listBeds, addBeds} = require('../controllers/beds.controller')
const { authenticate, authorize } = require('../middleware/auth.middleware');

router.post('/register', register);
router.post('/login', login);

router.get('/beds', listBeds);
router.post('/beds/add', addBeds);



// Example protected route
router.get('/admin', authenticate, authorize('delete'), (req, res) => {
    res.send('Welcome Admin!');
});

module.exports = router;
