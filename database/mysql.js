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

const connection = mysql.createConnection(credenciales1);
/*.then(res => {
    console.log("base de datos conectada");
    res.execute(`SELECT table_name, column_name, data_type 
                 FROM information_schema.columns 
                 WHERE table_schema = '${credenciales.database}'
                 ORDER BY table_name;`)
        .then(([rows, fields]) => {
            const result = {};
            rows.forEach(row => {
                if (!result[row.table_name]) {
                    result[row.table_name] = {};
                }
                result[row.table_name][row.column_name] = row.data_type;
            });
            console.dir(result);
        });
    module.exports = res;
});*/

/*connection.connect((err)=>{
    if (err) throw err;
    console.log("Base de datos connectada");
});*/

module.exports = connection;