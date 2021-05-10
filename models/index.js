//  Import models
const User = require('./User');
const Company = require('./Company');
const Review = require('./Review');
const CompanyReview = require('./CompanyReview');

// User has many Reviews
User.hasMany(Reviews, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
}); 

// Review belongs to User
Review.belongsTo(User, {
    foreignKey: 'user_id'
});

// Company has many Reviews
Company.hasMany(Review, {
    foreignKey: 'company_id',
    through: CompanyReview
});

// Review belongs to Company
Review.belongsTo(Company, {
    foreignKey: 'review_id',
    through: CompanyReview
});

module.exports = {
    User,
    Company,
    Review,
    CompanyReview
}