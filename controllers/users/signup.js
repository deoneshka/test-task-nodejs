const { getOne, add } = require('../../services/users');
const { getAccessToken } = require('../../utils/users');

const signup = async (req, res, next) => {
  const { email, password } = req.query;

  try {
    const user = await getOne(email);

    if (user) {
      res.status(409).json({
        status: 'conflict',
        code: 409,
        message: 'Email in use',
      });
      return;
    }

    const accessToken = getAccessToken(email);

    await add(email, password, accessToken);

    res.status(201).json({
      status: 'created',
      code: 201,
      message: 'User registered successfully.',
      result: {
        access_token: accessToken,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = signup;
