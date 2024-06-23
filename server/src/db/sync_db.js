const sequelize = require('./db'); 
const User = require('../models/user');
const Post = require('../models/post');
const Like = require('../models/like');

const table_drop_and_recreate = false // Make this true to drop and re create the tables

async function syncDatabase() {
  try {
    if(table_drop_and_recreate){
      await sequelize.sync({ force: true }); // Use { force: true } to drop tables and recreate them
      console.log('Database & tables dropped and recreated!');
    }
    else{ 
      await sequelize.sync(); // Use sync() without { force: true } to keep existing data
      console.log('Database & tables created or updated!');
    }  
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

syncDatabase();
