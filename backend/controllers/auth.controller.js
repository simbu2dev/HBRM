const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDB = require('../config/db');

const JWT_SECRET = process.env.JWT_SECRET;

const register = async (req, res) => {
    const { username, password, role } = req.body;

    const db = await connectDB();
    const users = db.collection('users');

    const existingUser = await users.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({
        username,
        password: hashedPassword,
        role: role || 'user'
    });

    res.status(201).json({ message: 'User registered successfully' });
};

const login = async (req, res) => {
    const { username, password } = req.body;

    const db = await connectDB();
    const users = db.collection('users');

    const user = await users.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
        expiresIn: '1h'
    });

    res.json({ token, role: user.role });
};

module.exports = {
    login,
    register
}