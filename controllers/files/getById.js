const { getOne } = require('../../services/files');

const getById = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.user.dataValues.id;

  try {
    const file = await getOne(id, userId);

    if (!file) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: 'File with this id not found',
      });
      return;
    }

    res.status(200).json({
      status: 'success',
      code: 200,
      result: {
        ...file.dataValues,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
