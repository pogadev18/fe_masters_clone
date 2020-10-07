const router = require('express').Router();
const bcrypt = require('bcryptjs');

const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation');

router.post('/register', async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists)
    return res.status(400).send({ emailExists: 'Email already registered!' });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hashedPassword
  });

  try {
    const savedUser = await user.save();
    res.status(200).send({ userId: user._id, username: user.firstName });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send({ loginError: 'Invalid email' });

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.status(400).send({ loginError: 'Invalid password' });

  res
    .status(200)
    .send({ email: req.body.email, message: 'Logged in successfully!' });
});

module.exports = router;
