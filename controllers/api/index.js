const router = require('express').Router();
const companyRoutes = require('./company-routes');
const reviewRoutes = require('./review-routes');
const userRoutes = require('./user-routes');
const resourceRoutes = require('./resource-routes')

router.use('/companies', companyRoutes);
router.use('/reviews', reviewRoutes);
router.use('/users', userRoutes);
router.use('/resources', resourceRoutes);

module.exports = router;
