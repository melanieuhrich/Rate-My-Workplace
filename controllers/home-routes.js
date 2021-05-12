const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');
const { restore } = require('../models/Review');

router.get('/homepage', withAuth, async (req, res) => {
    res.render('homepage')
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return;
    }

    res.render('login')
});

module.exports = router;