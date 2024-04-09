const { Blog } = require('../models');

const blogData = [
  {
    id: 1,
    title: 'Batman',
    content: 'Most people dont know this but Batman also goes by the name, Dark Knight',
    user_id: 1,
    universe: 'DC',
  },

];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
