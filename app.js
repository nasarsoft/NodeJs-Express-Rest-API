const express=require('express');
const app=express();
const bodyParser =require('body-parser');

app.use(bodyParser.json());
 
const blogRouters=require('./routes/blog');
app.use(blogRouters);


//import employee routes

const employeeRoutes = require ('./src/Modules/Employee/routes/api');
app.use('/api/v1/employee',employeeRoutes)

app.listen(8000);