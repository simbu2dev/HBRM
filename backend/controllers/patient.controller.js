const connectDB = require('../config/db');

const registerPatient = async (req, res) => {
    const { firstName, lastName, age, gender, email, phone, address } = req.body;

    if (!firstName || !lastName || !age || !gender || !email || !phone || !address) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const db = await connectDB();
        const patients = db.collection('patients');

        const existing = await patients.findOne({ email });
        if (existing) return res.status(409).json({ message: 'Patient already exists with this email' });

        const result = await patients.insertOne({
            firstName,
            lastName,
            age,
            gender,
            email,
            phone,
            address,
            createdAt: new Date()
        });

        res.status(201).json({ message: 'Patient registered', patientId: result.insertedId });
    } catch (error) {
        console.error('Error registering patient:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { registerPatient };
