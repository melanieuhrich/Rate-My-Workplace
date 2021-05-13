const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models');
const { restore } = require('../models/Review');

router.get('/', withAuth, async (req, res) => {
    res.render('homepage', {logged_in: req.session.logged_in})
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return;
    }

    res.render('login', {logged_in: false})
});

router.get('/about-us', (req, res) => {
    res.render('about-us')
})

module.exports = router;