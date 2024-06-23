const devSequelize = require('./db');
const prodSequelize = null // Import prod db config here

const sequelize = process.env.NODE_ENV == "dev" ? devSequelize : prodSequelize

module.exports = sequelize;
