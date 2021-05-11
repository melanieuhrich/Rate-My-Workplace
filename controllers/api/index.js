const router = require('express').Router();
const companyRoutes = require('./company-routes');
const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes');
// const jobSearchRoutes = require ('./job-search-routes')

router.use('/companies', companyRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
// router.use('/jobSearches', jobSearchRoutes)

module.exports = router;
