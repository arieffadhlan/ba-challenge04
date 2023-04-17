const { Car } = require("../models");

exports.isCarExists = async (req, res, next) => {
	try {
		const id = req.params.id
		const car = await Car.findOne({ where: { id } });
		
		if (!car) {
			res.status(404).json({
				status: "Error",
				message: "Data mobil tidak ditemukan!",
			});
			return;
		}

		req.car = car;
		next();
	} catch (error) {
		res.status(500).json({
			status: "Error",
			message: error.message,
		});
	}
}