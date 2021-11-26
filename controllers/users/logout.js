const logout = async (req, res, next) => {
  const user = req.user;

  try {
    await user.update({ access_token: null });

    res.status(204).json({
      status: 'No content',
      code: 204,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
