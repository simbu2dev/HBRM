const jwt = require('jsonwebtoken');
const { checkPermission } = require('../utils/rbac');
const JWT_SECRET = process.env.JWT_SECRET;

function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: 'Invalid token' });
        req.user = user;
        next();
    });
}

function authorize(action) {
    return (req, res, next) => {
        const role = req.user.role;
        if (!checkPermission(role, action)) {
            return res.status(403).json({ message: 'Access denied' });
        }
        next();
    };
}

module.exports = { authenticate, authorize };
