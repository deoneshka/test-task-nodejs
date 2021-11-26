const { models } = require('../../bin/sequelize');

const getAllLimit = (userId, limit, offset) => {
  const files = models.file.findAll({
    where: {
      userId: userId,
    },
    limit: limit,
    offset: offset,
    raw: true,
  });

  return files;
};

module.exports = getAllLimit;
