const { models } = require('../../bin/sequelize');

const getOne = (id, userId) => {
  const file = models.file.findOne({
    where: {
      id: id,
      userId: userId,
    },
  });
  return file;
};

module.exports = getOne;
