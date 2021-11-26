const passport = require('passport');
const jwtStrategy = require('../../configs/passportConfig');

passport.use('jwt', jwtStrategy);

const authenticate = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (error, user) => {
    if (error || !user || !user.dataValues.access_token) {
      res.status(401).json({
        status: 'Unauthorized',
        code: 401,
        message: 'Not authorized',
      });
      return;
    }

    req.user = user;
    next();
  })(req, res, next);
};

module.exports = authenticate;
