const DB = require('../db_helper')
const conn = DB.conn

function add(obj) {
    DB.MysqlOpen()
    var userAddSql = 'INSERT INTO article(id,summary,title,list) VALUES(?,?,?,?)';
    var userAddSql_Params = [obj.id, obj.summary, obj.title, obj.list];
    //增
    conn().query(userAddSql, userAddSql_Params, function (err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }

        console.log('--------------------------INSERT----------------------------');
        //console.log('INSERT ID:',result.insertId);        
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
        DB.MysqlClose()
    });

}

function dele() {

}

function update() {

}

function select(page, size, type, callback) {
    DB.MysqlOpen()
    var userAddSql = "SELECT * FROM article WHERE list LIKE '%?%' LIMIT ?,?;"
    var userAddSql_Params = [type, Number(page) * Number(size), Number(size)]
    conn().query(userAddSql, userAddSql_Params, function (err, rows, fields) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message)
            return;
        }
        callback({
            list: rows
        });
        DB.MysqlClose()
    });
}

function getArticleById(id, callback) {
    DB.MysqlOpen()
    var userAddSql = 'SELECT * FROM article where id = ?'
    var userAddSql_Params = [id]
    //增
    conn().query(userAddSql, userAddSql_Params, function (err, row, fields) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        callback({
            article: row[0]
        });
        DB.MysqlClose()
    });
}

module.exports = {
    add: add,
    dele: dele,
    update: update,
    select: select,
    getArticleById: getArticleById
}