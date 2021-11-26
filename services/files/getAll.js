const { models } = require('../../bin/sequelize');

const getAll = filter => {
  const files = models.file.findAll({
    where: {
      userId: filter,
    },
    raw: true,
  });

  return files;
};

module.exports = getAll;
