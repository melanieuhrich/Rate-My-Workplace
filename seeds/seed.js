const sequelize = require('../config/connection');
const {Company} = require('../models');

const companyData = require('./companyData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const companies = await Company.bulkCreate(companyData, {
      individualHooks: true,
      returning: true,
    });


  
    process.exit(0);
  };
  
 seedDatabase();
  