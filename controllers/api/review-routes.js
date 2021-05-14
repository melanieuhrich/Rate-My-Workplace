const router = require('express').Router();
const { Review, User, Company } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all reviews
// router.get('/', withAuth, async (req, res) => {
//     try {
//         const reviewData = await Review.findAll({
//             include: [
//                 {
//                     model: User, 
//                     attributes: ['name'],
//                 },
//             ],
//         });

//         // Serialize data
//         const reviews = reviewData.map((review) => review.get({ plain: true }));

//         // Pass serialized data and session flag into template 
//         res.render('company', {
//             reviews
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get('/:id', withAuth, async (req, res) => {
    console.log(req.params.id)
    try {
        const compData = await Company.findOne({
            where: {
                id: req.params.id
            }
        })

        const currentComp = compData.get({ plain: true });
        console.log(currentComp)

        res.render('review', {company:currentComp, logged_in: req.session.logged_in});
    } catch (err) {
        res.status(500).json(err);
    }
})

// Post a new review 
router.post('/:id', withAuth, async (req, res) => {
    try {
        const newReview = await Review.create({
            ...req.body,
            user_id: req.session.user_id,
            company_id: req.params.id
        });

        res.status(200).json(newReview);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
