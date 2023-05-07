const mysql = require('mysql2/promise');

const credenciales1 = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'p1_sw'
};

const credenciales2 = {
    host: '45.132.157.1',
    user: 'u300302440_agencia',
    password: '1IUFbkzFe~9T',
    database: 'u300302440_turismo'
};

const connection = mysql.createConnection(credenciales2)
//.then(res => {
//    console.log("base de datos conectada");
//});

/*connection.connect((err)=>{
    if (err) throw err;
    console.log("Base de datos connectada");
});*/

module.exports = connection;