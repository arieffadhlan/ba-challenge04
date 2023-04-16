const { Car } = require("../models");

exports.renderHome = async (req, res) => {
    const cars = await Car.findAll();
    res.render("index", { cars });
}

exports.renderAddCar = async (req, res) => {
    res.render("pages/add-car");
}

exports.renderByPk = async (req, res) => {
    const id = 11;
    const car = await Car.findByPk(id);
    res.render("index", {car});   
}

exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.findAll();
        if (cars.length > 0) {
            res.status(200).json({ data: cars });
        } else {
            res.status(200).json({
                message: "Data mobil masih kosong!",
            });
        }
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
        const car = await Car.create(req.body);
        res.status(201).json({
            status: "Success",
            message: "Data Berhasil Disimpan",
            data: car
        });
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        });
    }
};

exports.updateCar = (req, res) => {
    try {
        const id = req.params.id;
        Car.update(req.body, {
            where: { id: id }
        });
        // res.status(200).json({
        //     status: "Success",
        //     message: "Data Berhasil Disimpan"
        // });
        res.status(200).redirect("/")
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        });
    }
};

exports.deleteCar = (req, res) => {
    try {
        const id = req.params.id;
        Car.destroy({
            where: { id: id }
        });

        // res.status(200).json({
        //     status: "Success",
        //     message: "Data Berhasil Dihapus"
        // });
        
        res.status(200).redirect("/");
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        });
    }
};