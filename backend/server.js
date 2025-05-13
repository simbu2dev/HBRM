require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const authRoutes = require('./routes/auth.routes');
const patientRoutes = require('./routes/patient.routes');
const { authenticate } = require('./middleware/auth.middleware');

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api/patient', authenticate, patientRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
