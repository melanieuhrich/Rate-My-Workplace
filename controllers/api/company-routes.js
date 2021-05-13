const router = require("express").Router();
const { Company } = require("../../models");
const withAuth = require("../../utils/auth");

// Gets all companies
router.get("/", withAuth, async (req, res) => {
  try {
    const companyData = await Company.findAll();

    const companies = companyData.map((company) =>
      company.get({ plain: true })
    );

    console.log(companies);
    res.render("list", { logged_in: req.session.logged_in, companies });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Gets a company by its ID
router.get("/:id", async (req, res) => {
  try {
    const companyData = await Company.findByPk(req.params.id);

    const company = companyData.get({ plain: true });

    res.render("company", {
      ...company,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
