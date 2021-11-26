const jwt = require('jsonwebtoken');
require('dotenv').config();

const getAccessToken = email => {
  const { SECRET_KEY } = process.env;
  const payload = {
    id: email,
  };
  const token = jwt.sign(payload, SECRET_KEY);

  return token;
};

module.exports = getAccessToken;
