const { models } = require('../../bin/sequelize');

const del = (id, userId) => {
  const result = models.file.destroy({
    where: {
      id: id,
      userId: userId,
    },
  });
  return result;
};

module.exports = del;
