# PERN Stack Boilerplate

## Overview

Welcome to the PERN Stack Boilerplate! This repository serves as a comprehensive starting point for building full-stack applications using PostgreSQL, Express, React, and Node.js. It includes a basic setup for the backend, frontend, and database, allowing you to focus on developing your application without worrying about initial configuration.

## Features

- **PostgreSQL**: Robust relational database setup.
- **Express**: Backend framework for building powerful APIs.
- **React**: Frontend library for creating interactive user interfaces.
- **Node.js**: JavaScript runtime for executing server-side code.
- **Sequelize**: ORM for PostgreSQL to manage data models and queries.
- **Authentication**: Basic user authentication setup (register, login) using JWT.
- **State Management**: Using Zustand for state management in React.
- **Styling**: TailwindCSS for modern and responsive styling.
- **API Requests**: Axios for handling HTTP requests.
- **Testing**: Setup for testing React components.
- **Logging**: Winston for robust logging.
- **Environment Configuration**: Easy management of environment variables.

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- PostgreSQL (>=13.x)
- npm (>=6.x) or yarn (>=1.x)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/Samujit007/pern-stack-boiler-plate.git
   cd pern-stack-boilerplate

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Setup environment variables**:
    ```sh
    JWT_SECRET=your_jwt_secret
    NODE_ENV=dev
    DB_USER=DB_USER
    DB_PASSWORD=DB_PASSWORD
    DB_NAME=DB_NAME
    DB_HOST=localhost
    DB_PORT=5432
    PROD_DB_PASSWORD=PROD_DB_PASSWORD
    PROD_DB_HOST=PROD_DB_HOST
    SERVER_PORT=3001
    ALLOWED_HOST_DEV=http://localhost:3000  
    ALLOWED_HOST_PROD=prodhosturl
    REACT_APP_ENV=dev
    REACT_APP_API_URL_DEV=http://localhost:3001/api
    REACT_APP_API_URL_PROD=produrl/api
    
    ```

4.  **Database Configuration**
    The database configuration is handled by Sequelize. Make sure your PostgreSQL database is up and running, and the credentials in your `.env` file match your setup.


5. **Dependencies**:
    ***backend*** 
    - bcryptjs: Password hashing.
    - cors: Cross-Origin Resource Sharing.
    - dotenv: Environment variables management.
    - express: Web framework.
    - express-validator: Validation for express routes.
    - jsonwebtoken: JWT authentication.
    - pg: PostgreSQL client for Node.js.
    - pg-hstore: Module for serializing and deserializing JSON data.
    - sequelize: ORM for PostgreSQL.
    - winston: Logging library.
    - nodemon: optional command-line tool
    ***frontend***:
    - react: React library.
    - zustand: Bear necessities for state management in React.
    - tailwindcss: Utility-first CSS framework. 
    - axios: HTTP client for making requests.  

6. **Running the Server**:
    To start the server, run: 
    ```bash
    npx nodemon server.js
    ```     

6. **Running the Server**:
    To start the client, run: 
    ```bash
    npm run start
    ```    
7. **Access Your Application**:
    Open your browser and navigate to http://localhost:3000 or configured port from .env to see the frontend.
    The backend server runs on http://localhost:3001 or configured port from .env.