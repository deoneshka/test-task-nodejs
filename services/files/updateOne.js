const updateOne = ({ name, extension, mimeType, size }, file) => {
  file.name = name;
  file.extension = extension;
  file.mimeType = mimeType;
  file.size = size;
  return file.save();
};

module.exports = updateOne;
