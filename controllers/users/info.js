const info = async (req, res, next) => {
  const { id } = req.user.dataValues;

  res.status(200).json({
    status: 'OK',
    code: 200,
    result: {
      email: id,
    },
  });
};

module.exports = info;
