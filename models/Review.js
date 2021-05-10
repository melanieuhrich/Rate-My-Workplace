const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Modell { }

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        safety_culture: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        safety_training: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        hazard_id: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        lead_emphasis: {
            type: DataTypes.INTEGER, 
            allowNull: false
        },
        safety_manager: {
            type: DataTypes.BOOLEAN, 
            allowNull: false
        },
        contents: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        company_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'company',
                key: 'id',
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'review',
    }
);

module.exports = Review;