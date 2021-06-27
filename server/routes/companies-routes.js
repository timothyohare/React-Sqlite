const express = require('express');
const companiesRoutes = require('./../controllers/companies-controller.js');
const router = express.Router();

router.get('/all', companiesRoutes.companiesAll);
module.exports = router;
