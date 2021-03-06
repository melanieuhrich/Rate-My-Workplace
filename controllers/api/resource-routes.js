const withAuth = require('../../utils/auth');

const router = require('express').Router();

router.get('/', withAuth, async (req, res) => {
    try {
        res.render('resources', {logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;