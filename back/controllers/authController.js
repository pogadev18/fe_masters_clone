const User = require('../models/User');

const handleErrors = err => {
  console.log(err.message, err.code);
  let errors = {
    name: '',
    email: '',
    password: ''
  };

  if (err.code === 11000) {
    errors.email = 'That email is already registered!';
    return errors;
  }

  // 'push' into the objcet the errors that correspond to each key (name, email, password)
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

module.exports.signup_post = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    const errors = handleErrors(error);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
};
