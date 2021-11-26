const express = require('express');
const router = express.Router();

const {
  upload,
  list,
  deleleteFile,
  getById,
  download,
  update,
} = require('../controllers/files');
const authenticate = require('../middlewars/userAuth');
const uploadFile = require('../middlewars/upload');

router.post('/upload', authenticate, uploadFile.single('file'), upload);

router.get('/list', authenticate, list);

router.get('/:id', authenticate, getById);

router.get('/download/:id', authenticate, download);

router.put('/update/:id', authenticate, uploadFile.single('file'), update);

router.delete('/delete/:id', authenticate, deleleteFile);

module.exports = router;
