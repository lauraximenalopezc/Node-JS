var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'bz19r9qvrmlqcgwbxnrb-mysql.services.clever-cloud.com',
  user     : 'uta5ch7ckufl2djr',
  password : 'UEScESHxtuaB63A7pMhF',
  database : 'bz19r9qvrmlqcgwbxnrb'
});
 
connection.connect();
 
connection.query('SELECT * from `ALUMNO`', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();