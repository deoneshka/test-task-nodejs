const sequelize = require('./sequelize');
const app = require('../app');

require('dotenv').config();

const { PORT = process.env.PORT || 3000 } = process.env;

async function assertDatabaseConnectionOk() {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful.');
  } catch (error) {
    console.log('Unable to connect to the database:');
    console.log(error.message);
    process.exit(1);
  }
}

async function init() {
  await assertDatabaseConnectionOk();

  app.listen(PORT, () => {
    console.log(`Server running. Use our API on port: ${PORT}`);
  });
}

init();
