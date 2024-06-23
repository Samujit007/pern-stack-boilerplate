const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      const error = new Error('Invalid email or password in Login');
      error.status = 401;
      return next(error); // Pass the error to the error-handling middleware
      // return res.status(401).json({ error: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user.id, username: user.username, email: user.email }, process.env.JWT_SECRET, { expiresIn: '10m' });
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (error) {
    next(error);
  }
};

module.exports = {register, login}
