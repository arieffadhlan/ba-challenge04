'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Cars', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			name: {
				allowNull: false,
				type: Sequelize.STRING
			},
			rent_per_day: {
				allowNull: false,
				type: Sequelize.STRING
			},
			size: {
				allowNull: false,
				type: Sequelize.ENUM('Small', 'Medium', 'Large')
			},
			image: {
				allowNull: false,
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Cars');
	}
};