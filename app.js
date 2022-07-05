const express=require('express');
const app=express();
const bodyParser =require('body-parser');

app.use(bodyParser.json());
 
const blogRouters=require('./routes/blog');
app.use(blogRouters);

app.listen(8000);