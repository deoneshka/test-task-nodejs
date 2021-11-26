const { getOne } = require('../../services/users');
const { getAccessToken } = require('../../utils/users');

const signin = async (req, res, next) => {
  const { email, password } = req.query;

  try {
    const user = await getOne(email);

    if (!user || !user.comparePassword(password)) {
      res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Email or password is wrong',
      });
      return;
    }

    const accessToken = getAccessToken(email);

    await user.update({ access_token: accessToken });

    res.status(200).json({
      status: 'OK',
      code: 200,
      result: {
        access_token: accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signin;
