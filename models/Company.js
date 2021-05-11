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
            allowNull: true,
        },
        industry: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        company_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        logo_url: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gd_rating_1: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        gd_rating_2: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        gd_rating_3: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        our_rating: {
            type: DataTypes.INTEGER,
            allowNull: true,
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