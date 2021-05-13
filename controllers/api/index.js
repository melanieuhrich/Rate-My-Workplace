const router = require('express').Router();
const companyRoutes = require('./company-routes');
const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes');
const resourceRoutes = require('./resource-routes');
const aboutRoutes = require('./aboutus-routes')

router.use('/companies', companyRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
router.use('/resources', resourceRoutes);
router.use('/about-us', aboutRoutes);

module.exports = router;
