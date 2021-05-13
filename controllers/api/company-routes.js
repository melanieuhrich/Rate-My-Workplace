const router = require('express').Router();
const { Company } = require('../../models');

/*
let companies = [    
    {
        "name": "IBM",
        "location": "Armonk",
        "industry": "Technology",
        "company_url": "https://www.ibm.com/",
        "logo_url": "https://www.ibm.com/design/language/189b43fc4d43434372d82a514fcbc19f/core_black-on-gray30.svg"
    },
    {
        "name": "Google",
        "location": "Mountain View",
        "industry": "Technology",
        "company_url": "https://www.google.com",
        "logo_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1920px-Google_2015_logo.svg.png"
    },
    {
        "name": "Amazon",
        "location": "Seattle",
        "company_url": "https://www.amazon.com",
        "logo_url": "https://press.aboutamazon.com/system/files-encrypted/nasdaq_kms/inline-images/Amazon-logo.jpg"
    },
    {
        "name": "Walmart",
        "location": "Bentonville",
        "industry": "Retail",
        "company_url": "https://www.walmart.com",
        "logo_url": "https://cdn.corporate.walmart.com/dims4/WMT/ea03f5e/2147483647/strip/true/crop/855x305+0+0/resize/1578x563!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F98%2F28%2F342ccbff478ab025592645fafcfc%2Fwalmart-logo.png"
    },
    {
        "name": "Apple",
        "location": "Cupertino",
        "industry": "Technology",
        "company_url": "https://www.apple.com",
        "logo_url": "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202104291040"
    },
    {
        "name": "CVS",
        "location": "Woonsocket",
        "industry": "Retail",
        "company_url": "https://www.cvs.com",
        "logo_url": "https://cvshealth.com/sites/default/files/cvs-health-logo-stacked.png"
    },
    {
        "name": "Target",
        "location": "Minneapolis",
        "industry": "Retail",
        "company_url": "https://www.Target.com",
        "logo_url": "https://1000logos.net/wp-content/uploads/2021/04/Target-logo-500x383.png"
    },
    {
        "name": "Costco",
        "location": "Seattle",
        "industry": "Retail",
        "company_url": "https://www.costco.com",
        "logo_url": "https://1000logos.net/wp-content/uploads/2021/04/Costco-logo-500x281.png"
    },
    {
        "name": "UPS",
        "location": "Atlanta",
        "industry": "Logistics",
        "company_url": "https://www.ups.com",
        "logo_url": "https://1000logos.net/wp-content/uploads/2021/04/UPS-logo-500x281.png"
    },
    {
        "name": "Lowe's",
        "location": "Mooresville",
        "industry": "Retail",
        "company_url": "https://www.lowes.com",
        "logo_url": "https://www.lowes.com/images/logos/2016_lowes_logo/lowes_logo_pms_280/Lowes_logo_pms_280.png"
    }
]

*/

// Gets all companies 
router.get('/', async (req, res) => {
    try {
       const companyData = await Company.findAll();

        const companies = companyData.map((company) => company.get({ plain: true }));

       console.log(companies)
        res.render('company', {
            companies
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Gets a company by its ID
router.get('/:id', async (req, res) => {
    try {
        const companyData = await Company.findByPk(req.params.id);

        const company = companyData.get({ plain: true });

        res.render('company', {
            ...company,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;