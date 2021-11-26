const { models } = require('../../bin/sequelize');

const add = (email, password, token) => {
  const newUser = models.user.build({
    id: email,
    password: password,
    access_token: token,
  });
  newUser.setSecurePassword(password);
  return newUser.save();
};

module.exports = add;
