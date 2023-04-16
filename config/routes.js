const express = require("express");
const controllers = require("../app/controllers");
const middlewares = require("../app/middlewares");
const imageUploader = require("../app/middlewares/imageUploader");
const cloudninaryUpload = require("../app/middlewares/cloudinary-upload");
const cloudninaryDelete = require("../app/middlewares/cloudinary-delete");
const cloudinaryDelete = require("../app/middlewares/cloudinary-delete");
const appRouter = express.Router();

appRouter.get("/", controllers.renderHome);
appRouter.get("/cars/create", controllers.renderAddCar);
appRouter.post("/cars/create", imageUploader, cloudninaryUpload, controllers.addCar);
appRouter.get("/cars/edit/:id", middlewares.isCarExists, controllers.renderUpdateCar);
appRouter.post("/cars/update/:id", middlewares.isCarExists, imageUploader, cloudninaryUpload, controllers.updateCar);
appRouter.get("/cars/delete/:id", middlewares.isCarExists, cloudinaryDelete, controllers.deleteCar);

module.exports = appRouter;