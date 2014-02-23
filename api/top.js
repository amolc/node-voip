var http = require('http');
var mysql = require('mysql');
var DB = 'gnossem';
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
	
	
	exports.findAll = function(req, res) {
		
		var table = 'jos_vm_product';
	    var query = "SELECT * from "+DB+"."+table+" where "+table+".product_publish = 'Y' order by "+table+".product_id limit 100";
		
		connection.query(query, function(err, rows){
		res.jsonp(rows);		
		});
};


exports.findByCategory = function(req, res) {
	
	var id = parseInt(req.params.id);
	var table1 = 'jos_vm_product';
	var table2 = 'jos_vm_product_category_xref';
	var query = "SELECT * from "+DB+"."+table1+","+DB+"."+table2+" where "+table2+".category_id="+id+" and "+table2+".product_id = "+table1+".product_id and "+table1+".product_publish = 'Y' order by "+table1+".product_id limit 100";
	
	connection.query(query, function(err, rows){
	res.jsonp(rows);		
	});
};
	

