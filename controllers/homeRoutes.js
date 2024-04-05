const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/universe/:name', async (req, res) => {
    try {
      // Get all blogs and JOIN with user data
    //   const blogData = await Blog.findAll({
    //     where: { universe: req.params.name},
    //     include: [
    //       {
    //         model: User,
    //         attributes: ['name'],
    //       },
    //     ],
    //   });
  
    //   // Serialize data so the template can read it
    //   const blogs = blogData.map((blog) => blog.get({ plain: true }));
      const blogs = [
        {
            name: 'example',
            description: 'This is an example universe',
            universe: 'DC',
            user: {name: 'edward'},
            date_created: new Date()
        },
        {
            name: 'example 2',
            description: 'This is an example universe 2',
            universe: 'DC',
            user: {name: 'edward'},
            date_created: new Date()
        }
      ]
  
      // Pass serialized data and session flag into template
      res.render('universe', { 
        blogs, 
        logged_in: req.session.logged_in 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
