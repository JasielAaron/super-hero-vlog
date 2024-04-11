const { User } = require('../models');
const userData = [
  {
    username: 'Tom',
    email: 'Tom@email.com',
    password: 'pass',
  },
];
const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;