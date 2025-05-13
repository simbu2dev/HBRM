const express = require('express');
const router = express.Router();
const { registerPatient } = require('../controllers/patient.controller');

router.post('/register', registerPatient);

module.exports = router;
