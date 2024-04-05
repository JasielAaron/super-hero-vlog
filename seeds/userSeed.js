const { User } = require('../models');

const userData = [
  {
    id: 1,
    username: 'Jasiel20',
    email: 'Jasiel@Jasiel.com',
    password: '1234',
  },

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
