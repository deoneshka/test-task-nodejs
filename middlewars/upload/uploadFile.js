const path = require('path');
const multer = require('multer');

const tmpDir = path.join(process.cwd(), 'public');
const fileSize = 10000;

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, tmpDir);
  },
  filename: (_, file, cb) => {
    cb(null, Date.now().toString() + '_' + file.originalname);
  },
  limits: {
    fileSize: fileSize,
  },
});

const uploadFile = multer({ storage: storage });

module.exports = uploadFile;
