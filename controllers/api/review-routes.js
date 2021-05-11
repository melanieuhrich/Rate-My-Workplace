const router = require('express').Router();
const { Review, User } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all reviews
router.get('/', async (req, res) => {
    try {
        const reviewData = await Review.findAll({
            include: [
                {
                    model: User, 
                    attributes: ['name'],
                },
            ],
        });

        // Serialize data
        const reviews = reviewData.map((review) => review.get({ plain: true }));

        // Pass serialized data and session flag into template 
        res.render('company', {
            reviews
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Post a new review 
router.post('/', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});
