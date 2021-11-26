const fs = require('fs');
const path = require('path');
const { getOne, updateOne } = require('../../services/files');

const update = async (req, res, next) => {
  if (!req.file) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Please attach a file',
    });
    return;
  }

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

    const isFileLocal = fs.existsSync(`./public/${file.name}`);

    if (isFileLocal) fs.unlinkSync(`./public/${file.name}`);

    const { filename, originalname, mimetype, size } = req.file;

    const updatedFile = {
      name: filename,
      extension: path.extname(originalname),
      mimeType: mimetype,
      size: size,
    };

    await updateOne(updatedFile, file);

    res.status(200).json({
      status: 'OK',
      code: 200,
      message: 'File updated successfully.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = update;
