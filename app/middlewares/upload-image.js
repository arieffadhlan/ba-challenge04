const multer = require("multer");
const path = require("path");

const storage = multer.memoryStorage();
const fileExtensions = [".png", ".jpg", ".jpeg"];

const imageFilter = (req, file, callback) => {
  let fileExtension = path.extname(file.originalname);
  if (fileExtensions.includes(fileExtension)) {
    return callback(null, true);
  }
  callback(null, false);
  callback(new Error("File gambar harus berupa png, jpg, atau jpeg."));
};

const upload = multer({
  storage: storage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
}).single("image");

const imgUploader = (req, res, next) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(400).json({
        message: err.message,
        err_msg: err.code,
      });
      return;
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(400).json({
        message: err.message,
        err_msg: err.code,
      });
      return;
    }
    next();
  });
};

module.exports = imgUploader;