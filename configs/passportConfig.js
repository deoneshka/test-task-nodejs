const { ExtractJwt, Strategy } = require('passport-jwt');
require('dotenv').config();

const { getOne } = require('../services/users');

const { SECRET_KEY } = process.env;

const settings = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

const jwtStrategy = new Strategy(settings, async (payload, done) => {
  try {
    const user = await getOne(payload.id);

    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = jwtStrategy;
