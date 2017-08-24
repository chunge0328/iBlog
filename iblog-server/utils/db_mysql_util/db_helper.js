// const mysql = require('mysql')

// let conn = null;

// function MysqlOpen() {
//     if (!conn) {
//         conn = mysql.createConnection({
//             host: '182.254.211.214',
//             user: 'root',
//             password: 'ls19960608',
//             database: 'iblog'
//         })
//          conn.connect()
//     }
// }

// function MysqlClose() {
//     // conn.end()
// }

// function getConn() {
//     return conn;
// }

// module.exports = {
//     MysqlOpen: MysqlOpen,
//     MysqlClose: MysqlClose,
//     conn: getConn
// }


const mysql = require("mysql");
const pool = mysql.createPool({
    host: '182.254.211.214',
    user: 'root',
    password: 'ls19960608',
    database: 'iblog'
});

const query = function (sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr, vals, fields);
            });
        }
    });
};

module.exports = query;