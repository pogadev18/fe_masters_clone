const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// middleware
app.use(express.json());

mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(result => app.listen(8000))
  .catch(err => console.log(err));

// routes
app.get('/', (req, res) => res.send('hello from home!'));
app.use(authRoutes);
