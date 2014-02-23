var http = require('http');
var mysql = require('mysql');
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
	connection.query("SELECT * from jos_vm_product,jos_vm_product_price where jos_vm_product_price.product_id= jos_vm_product.product_id order by jos_vm_product.product_id limit 30", function(err, rows){
	res.jsonp(rows);		
	});
};

exports.findByID = function(req, res) {
	
	var id = parseInt(req.params.id);
	
	connection.query("SELECT * from jos_vm_product_price,jos_vm_product where jos_vm_product.product_id="+id+" and jos_vm_product_price.product_id= jos_vm_product.product_id", function(err, rows){
	res.jsonp(rows);		
	});
};
	

exports.findByCatagory = function(req, res) {
	
	   var id = parseInt(req.params.id);
	
	    var query = "SELECT pro.*,jos_vm_product_price.* FROM jos_vm_product_price,jos_vm_product_category_xref as cat,jos_vm_product as pro WHERE cat.category_id = "+id+"	and pro.product_id = cat.product_id and jos_vm_product_price.product_id= pro.product_id limit 30";
		
		connection.query(query, function(err, rows){
		res.jsonp(rows);		
		});
};

exports.findBySubCatagory = function(req, res) {
	
	   var id = parseInt(req.params.id);
	
	    var query = "SELECT pcat.category_parent_id,cat.*,pro.* FROM `jos_vm_category_xref` as pcat ,jos_vm_product_category_xref as cat,jos_vm_product as pro WHERE pcat.category_parent_id = "+id+" and cat.category_id = pcat.category_child_id	and pro.product_id = cat.product_id limit 30";
		
		connection.query(query, function(err, rows){
		res.jsonp(rows);		
		});

};
