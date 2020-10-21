const User = require('../models/User');
const jwt = require('jsonwebtoken');

const handleErrors = err => {
  let errors = {
    name: '',
    email: '',
    password: ''
  };

  if (err.code === 11000) {
    errors.email = 'That email is already registered!';
    return errors;
  }

  if (err.message === 'incorrect email') {
    errors.email = 'that email is not registered';
  }

  if (err.message === 'incorrect password') {
    errors.password = 'that password is incorrect';
  }

  // 'push' into the object the errors that correspond to each key (name, email, password)
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};

module.exports.signup_post = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ userId: user._id, userName: user.name });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ token, userName: user.name });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};
