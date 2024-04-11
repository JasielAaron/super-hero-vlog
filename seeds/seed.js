const sequelize = require('../config/connection');
const seedBlog = require('./blogSeeds');
const seedUser = require('./userSeeds');
const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUser();
  await seedBlog();
  process.exit(0);
};
seedAll();