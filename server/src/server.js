const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./db');
const errorHandler = require('./middleware/errorHandler');
const app = express();
const port = process.env.SERVER_PORT || 3002;
const allowedHost = process.env.NODE_ENV == "dev" ? process.env.ALLOWED_HOST_DEV : process.env.ALLOWED_HOST_PROD
app.use(cors({
  origin: allowedHost, // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
}));
app.use(express.json());

// Import routes
const authRoutes = require('./routes/authRoutes');
// Add more routes

// Use routes
app.use('/api/auth', authRoutes);
// Add more routes

//Middlewae - Errorhandler
app.use(errorHandler);

//DB
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err));

//Test app  
app.get('/', (req, res) =>
    res.send('Hello World!')
);

//Run app
app.listen(port, () => console.log(`Development server running on port ${port}`));
