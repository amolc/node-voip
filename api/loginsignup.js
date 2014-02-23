var http = require('http');
var mysql = require('mysql');
var DB = 'gnossem';
var count = "";
var connection = mysql.createConnection({
  database: 'gnossem',
  user : 'gnossem',
  password : 'ferrari4321',
  port : '3306'
});
    
    connection.connect(function(err){
        if(err != null) {
        	console.log ('Err' +err);
        }
    });
	
	

exports.loginmethod = function(req, res) {
	
	var md5 = require('MD5');
    var resdata = new Array();
    resdata['status'] = "true";



   // resdata="['response':{status:'false',message:'username / password not match'}]";
    
    var query = "SELECT password from jos_users where jos_users.email='"+req.body.username+"'";
		
		connection.query(query, function(err, rows){
		   
            var count = rows.length;

            count = parseInt(count);
            
            if(count > 0){

            var dbpass = rows[0]['password'];

            var passparts = dbpass.split(":");

            var countpass = passparts.length;

            countpass = parseInt(countpass);
            
            if(countpass == 2)
            		{
            			var orgpass = req.body.passwordp+passparts[1];
            			orgpass = md5(orgpass);
            			if(orgpass == passparts[0])
            					{
								 
								  var resdata = {
									    status: 'true',
									    message: 'Login successfully'
									};
									res.jsonp(resdata);
            					}
            					 else
					              	  {
					              	  	var resdata = {
														    status: 'false',
														    message: 'Wrong Username or password'
														};
														res.jsonp(resdata);
					              	  }
            		}
            		 else
            		 	 {
            		 	 	var qpass = md5(req.body.passwordp);

            		 	 	if(dbpass == qpass)
            		 	 	{
            		 	 		
            		 	 		var resdata = {
									    status: 'true',
									    message: 'Login successfully'
									};
									res.jsonp(resdata);
            		 	 	}
            		 	 	 else
				              	  {
				              	  	var resdata = {
													    status: 'false',
													    message: 'Wrong Username or password'
													};
													res.jsonp(resdata);
				              	  }

            		 	 }
             }
              else
              	  {
              	  	var resdata = {
									    status: 'false',
									    message: 'Wrong Username or password'
									};
									res.jsonp(resdata);
              	  }

		});

   

	
};



exports.signupmethod = function(req, res) {
	
	var md5 = require('MD5');
    
    var query = "SELECT count(id) as total from jos_users where jos_users.email='"+req.body.email+"'";
		
		connection.query(query, function(err,rows){
		   
            count = rows[0]['total'];

            count = parseInt(count);
            if(count > 0)
            	{
            		
                    var resdata = {
				    status: 'false',
				    message: 'email already exists'
				};
  					res.jsonp(resdata);

            	}
            	 else
            	 	 {
            	 	 	var salt = "Hxzh91gPPEDeP08VZcNRU91iKtjY0b6a";
            	 	 	var passfinal = req.body.passwordp+salt;
            	 	 	passfinal = md5(passfinal);
            	 	 	passfinal = passfinal+":"+salt;
            	 	 	var query = "INSERT INTO jos_users SET email='"+req.body.email+"' , password='"+passfinal+"' , name = '"+req.body.name+"'";
            	 	 	connection.query(query, function(err,rows){

            	 	 		var resdata = {
							    status: 'true',
							    message: 'Signup successfully'
							};

            	 	 		res.jsonp(resdata);


            	 	 	});
            	 	 }

		});

  

	
};