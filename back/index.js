const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(cookieParser());

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

// cookies
app.get('/set-cookies', (req, res) => {
  res.cookie('newUser', false);
  res.cookie('isAdmin', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
  res.send('you got the cookies');
});

app.get('/read-cookies', (req, res) => {
  const cookies = req.cookies;
  console.log(cookies);

  res.json(cookies);
});
