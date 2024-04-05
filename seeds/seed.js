const sequelize = require('../config/connection');
const seedBlog = require('./blogSeed');
const seedUser = require('./userSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedBlog();

  process.exit(0);
};

seedAll();