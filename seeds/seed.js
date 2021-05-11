const sequelize = require('../config/connection');
const {Company} = require('../models');

const companyData = require('./companyData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const companies = await Company.bulkCreate(companyData, {
      individualHooks: true,
      returning: true,
    });

    
  
    // for (const company of companyData) {
    //   await Project.create({
    //     ...project,
    //     user_id: users[Math.floor(Math.random() * users.length)].id,
    //   });
    // }
  
    process.exit(0);
  };
  
 seedDatabase();
  