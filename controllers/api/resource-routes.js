const withAuth = require('../../utils/auth');

const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {
    try {
        res.render('resources', {logged_in: true});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;