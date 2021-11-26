const { models } = require('../../bin/sequelize');

const getOne = filter => models.user.findByPk(filter);

module.exports = getOne;
