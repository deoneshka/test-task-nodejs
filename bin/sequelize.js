const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');

require('dotenv').config();

const { DATABASE, PASSWORD } = process.env;

const sequelize = new Sequelize(DATABASE, 'root', PASSWORD, {
  dialect: 'mysql',
  host: 'localhost',
});

const modelDefiners = [
  require('../model/fileModel'),
  require('../model/userModel'),
  // Add more models here...
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
function applyExtraSetup(sequelize) {
  const { user, file } = sequelize.models;

  user.hasMany(file);
  file.belongsTo(user);

  user.prototype.setSecurePassword = function (password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  };

  user.prototype.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
}

applyExtraSetup(sequelize);
// sequelize.sync({ force: true });
module.exports = sequelize;
