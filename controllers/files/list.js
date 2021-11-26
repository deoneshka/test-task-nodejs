const { getAll, getAllLimit } = require('../../services/files');

const list = async (req, res, next) => {
  const userId = req.user.dataValues.id;
  const { listSize, page } = req.query;
  const limit = listSize ? +listSize : 10;
  const offset = page ? (page - 1) * listSize : 0;

  try {
    const files = await getAllLimit(userId, limit, offset);

    const allFiles = await getAll(userId);

    res.status(200).json({
      status: 'OK',
      code: 200,
      message: 'File list uploaded successfully.',
      page: offset,
      perPage: limit,
      allFiles: allFiles.length,
      result: {
        ...files,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = list;
