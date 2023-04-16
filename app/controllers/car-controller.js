const { Car } = require("../models");

exports.renderHome = async (req, res) => {
    const cars = await Car.findAll();
    res.render("index", { cars });
}

exports.renderAddCar = async (req, res) => {
    res.render("pages/add-car");
}

exports.renderUpdateCar = async (req, res) => {
    const car = req.car;
    res.render("pages/edit-car", { car });
}

exports.renderByPk = async (req, res) => {
    const id = 11;
    const car = await Car.findByPk(id);
    res.render("index", {car});   
}

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        return cars;
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        });
    }
};

exports.getCar = async (req, res) => {
    const car = req.car;
    res.status(200).json({ data: car });
};

exports.addCar = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            rent_per_day: req.body.rent_per_day,
            size: req.body.size,
            image: req.image
        }
        await Car.create({...data});
        res.redirect("/");
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        });
    }
};

exports.updateCar = async (req, res) => {
    try {
        const data = {
            name: req.body.name,
            rent_per_day: req.body.rent_per_day,
            size: req.body.size,
            image: req.image
        }
        await Car.update({...data}, {
            where: { id: req.params.id }
        });
        res.redirect("/");
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        });
    }
};

exports.deleteCar = async (req, res) => {
    try {
        const id = req.params.id;
        await Car.destroy({ where: { id } });
        res.redirect("/");
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        });
    }
};