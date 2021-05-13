const withAuth = require('../../utils/auth');
const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        res.render('about-us', {logged_in: false});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;