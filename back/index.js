const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Routes
const authRoute = require('./routes/auth');

dotenv.config();

// connect to DB
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () =>
  console.log('connected to DB!!!!!!!!!!!!!!!')
);

// Middleware
app.use(express.json());

// Route Middlewares
app.use('/api/user', authRoute);

app.listen(8000, () => console.log('server is running!'));
