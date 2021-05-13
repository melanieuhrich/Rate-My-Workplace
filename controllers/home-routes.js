const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User } = require('../models')

router.get('/', withAuth, async (req, res) => {

})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/')
        return;
    }

    res.render('login')
});

router.get('/about-us', (req, res) => {
    res.render('about-us')
})

module.exports = router;