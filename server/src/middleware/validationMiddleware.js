const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
  body('username').isLength({ min: 3 }).withMessage('Username must be at least 3 characters long'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateUserRegistration };
