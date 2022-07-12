const mysqle = require("mysql");
const  conecta = mysqle.createConnection({
  host: 'localhost',
  user: 'root',
  password: '3812',
  port: 3306,
  database: 'bdalmacen2'
});
conecta.connect();
module.exports=conecta;
