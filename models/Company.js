const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model { }

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false
        },
        company_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gd_rating_1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gd_rating_2: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gd_rating_3: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        our_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'company',
      }
);

module.exports = Company;