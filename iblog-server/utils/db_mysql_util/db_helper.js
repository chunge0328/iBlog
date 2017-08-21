const mysql = require('mysql')

let conn = null;

function MysqlOpen() {
    if (!conn) {
        conn = mysql.createConnection({
            host: '182.254.211.214',
            user: 'root',
            password: 'ls19960608',
            database: 'iblog'
        })
         conn.connect()
    }
}

function MysqlClose() {
    // conn.end()
}

function getConn() {
    return conn;
}

module.exports = {
    MysqlOpen: MysqlOpen,
    MysqlClose: MysqlClose,
    conn: getConn
}