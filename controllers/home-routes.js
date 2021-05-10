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

module.exports = router;