const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const { usersRouter, filesRouter } = require('./api');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/file', filesRouter);
app.use('/', usersRouter);

app.use((_, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((error, _, res, __) => {
  const { code = 500, message = 'Server error' } = error;
  res.status(code).json({
    status: 'fail',
    code,
    message,
  });
});

module.exports = app;
