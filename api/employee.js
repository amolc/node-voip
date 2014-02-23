var http = require('http');
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  database: 'gnossem',
  user : 'gnossem',
  password : 'ferrari4321',
  port : '3306'
});
    
    connection.connect(function(err){
        if(err != null) {
        	console.log ('Error ' +err);
        }
    });
    
    
exports.findAll = function(req, res) {
	connection.query("SELECT * from employee order by id", function(err, rows){
	res.jsonp(rows);		
	});
}
	

exports.findById = function(req, res) {
    console.log(req.params);
    var id = parseInt(req.params.id);
    console.log('findById: ' + id);
    connection.query("SELECT * from employee where id ="+ id, function(err, rows){
	res.jsonp(rows[0]); //query returns array of arrays we need to return the first one only.
	});
};


exports.findByManager = function(req, res) {
    var id = parseInt(req.params.id);
    console.log('findByManager: ' + id);
	connection.query("SELECT * from employee where managerId ="+ id, function(err, rows){
	res.jsonp(rows);
    });
};
