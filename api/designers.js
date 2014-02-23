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
		
		
	    var query = "SELECT * from jos_vm_vendor,jos_k2_attachments where jos_k2_attachments.itemID=jos_vm_vendor.user_id and jos_k2_attachments.filename != '' group by jos_k2_attachments.itemID limit 30";
		
		connection.query(query, function(err, rows){
		res.jsonp(rows);		
		});
};


exports.findByCategory = function(req, res) {
	
	var id = parseInt(req.params.id);
	var table1 = 'jos_vm_product';
	var table2 = 'jos_vm_product_category_xref';
	var table3 = 'jos_vm_vendor';
	var query = "SELECT "+table3+".* from "+DB+"."+table1+","+DB+"."+table2+","+DB+"."+table3+" where "+table2+".category_id="+id+" and "+table2+".product_id = "+table1+".product_id and "+table3+".vendor_id="+table1+".vendor_id order by "+table3+".vendor_id limit 100";
	
	connection.query(query, function(err, rows){
	res.jsonp(rows);		
	});
};


exports.findByCountry = function(req, res) {
	
	var contry = req.params.contry;
	var table = 'jos_vm_vendor';
	
	    var query = "SELECT * from "+DB+"."+table+" where vendor_country = '"+contry+"' order by "+table+".vendor_id";
		
		connection.query(query, function(err, rows){
		res.jsonp(rows);		
		});
};
	

