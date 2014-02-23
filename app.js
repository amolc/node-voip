var express = require('express'),
    path = require('path');
    employees = require('./api/employee');
    product = require('./api/product');
	top = require('./api/top');
	designers = require('./api/designers');
	loginsignup = require('./api/loginsignup');
   
   
    
var app = express();
app.use(express.bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/employees/:id/reports', employees.findByManager);
app.get('/api/employees/:id', employees.findById);
app.get('/api/employees', employees.findAll);

//New products respects to the ctegory Id and all top
app.get('/api/top', top.findAll);
app.get('/api/top/:id', top.findByCategory);

//All Products present in the database
app.get('/api/products', product.findAll);
app.get('/api/products/cat/:id', product.findByCatagory);
app.get('/api/products/subcat/:id', product.findBySubCatagory);
app.get('/api/products/detail/:id', product.findByID);


//Designers according to category
app.get('/api/designers', designers.findAll);
app.get('/api/designers/:id', designers.findByCategory);
app.get('/api/designers/:contry/country', designers.findByCountry);
//app.post('/api/designers/postdata', designers.Postdata);


// users data login and signup
app.post('/api/loginsignup', loginsignup.loginmethod);

app.post('/api/loginsignup/signup', loginsignup.signupmethod);





app.listen(3000);
console.log('Listening on port 3000...');
