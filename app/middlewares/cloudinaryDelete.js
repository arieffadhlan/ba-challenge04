const cloudinary = require("../../config/cloudinary");
const getPublicId = require("../../utils/getPublicId");

exports.cloudinaryDelete = async (req, res, next) => {
  try {
    const publicId = getPublicId(req.car.image);
    await cloudinary.uploader.destroy(publicId);

    next();
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};