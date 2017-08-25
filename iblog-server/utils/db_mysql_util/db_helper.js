
const mysql = require("mysql");
const pool = mysql.createPool({
    host: '182.254.211.214',
    user: 'root',
    password: 'xxx',
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
