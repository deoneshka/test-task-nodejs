const { models } = require('../../bin/sequelize');

const add = newFile => models.file.create(newFile);

module.exports = add;
