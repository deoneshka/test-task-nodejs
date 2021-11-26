const fs = require('fs');
const { del, getOne } = require('../../services/files');

const deleleteFile = async (req, res, next) => {
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

    await del(id, userId);

    fs.unlinkSync(`./public/${file.dataValues.name}`);

    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'File deleted.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleleteFile;
