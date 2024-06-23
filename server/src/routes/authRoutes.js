const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');
const { validateUserRegistration } = require('../middleware/validationMiddleware');

router.post('/register', validateUserRegistration, authController.register);
router.post('/login', authController.login);

// Example of a protected route
// Please send an auth token to access this
router.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
  });

module.exports = router;
