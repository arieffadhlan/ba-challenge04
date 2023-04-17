const express = require("express");
const controllers = require("../app/controllers");
const middlewares = require("../app/middlewares");
const imageUploader = require("../app/middlewares/upload-image");
const router = express.Router();

router.get("/", controllers.renderHome);
router.get("/cars/create", controllers.renderAddCar);
router.post("/cars/create", imageUploader, middlewares.cloudinaryUpload, controllers.addCar);
router.get("/cars/edit/:id", middlewares.isCarExists, controllers.renderUpdateCar);
router.post("/cars/update/:id", middlewares.isCarExists, imageUploader, middlewares.cloudinaryUpload, controllers.updateCar);
router.get("/cars/delete/:id", middlewares.isCarExists, middlewares.cloudinaryDelete, controllers.deleteCar);

module.exports = router;