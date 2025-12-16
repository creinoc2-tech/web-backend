
const { getAllCompanies, createCompanie  , getAllCompaniesTotalStats} = require('../controllers/CompanyController')
const express = require('express')
const router = express.Router()

router.get('/all' , getAllCompanies)
router.post('/create' , createCompanie)
router.get('/total-stats' , getAllCompaniesTotalStats)
module.exports = router
  