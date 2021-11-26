const path = require('path');
const { add } = require('../../services/files');

const upload = async (req, res, next) => {
  if (!req.file) {
    res.status(400).json({
      status: 'error',
      code: 400,
      message: 'Please attach a file',
    });
    return;
  }

  const { filename, originalname, mimetype, size } = req.file;
  const userId = req.user.dataValues.id;

  const newFile = {
    name: filename,
    extension: path.extname(originalname),
    mimeType: mimetype,
    size: size,
    userId: userId,
  };

  try {
    await add(newFile);

    res.status(200).json({
      status: 'OK',
      code: 200,
      message: 'The file has been uploaded successfully.',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = upload;
