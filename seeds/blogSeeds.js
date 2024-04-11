const { Blog } = require('../models');
const blogData = [
  {
    title: 'Random Title',
    content: 'Random Comment',
    user_id: 1,
  },
];
const seedBlog = () => Blog.bulkCreate(blogData);
module.exports = seedBlog;