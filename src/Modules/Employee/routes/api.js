const express = require('express');
const router = express.Router();

const employeeApiController = require('../controllers/EmployeeApiController');
router.get('/getAll',employeeApiController.getEmployeeList);

 
module.exports=router;