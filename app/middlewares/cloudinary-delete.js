const cloudinary = require("../../config/cloudinary");
const getPublicId = require("../../utils/getPublicId");

const cloudinaryDelete = async (req, res, next) => {
  try {
    const public_id = getPublicId(req.car.image);
    await cloudinary.uploader.destroy(public_id);

    next();
  } catch (error) {
    res.cookie("errorMsg", error.message);
    res.redirect("back");
  }
};

module.exports = cloudinaryDelete;