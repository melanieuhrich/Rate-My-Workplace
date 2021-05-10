const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CompanyReview extends Model {}

CompanyReview.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    company_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    review_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'review',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'company_review',
  }
);

module.exports = CompanyReview;
