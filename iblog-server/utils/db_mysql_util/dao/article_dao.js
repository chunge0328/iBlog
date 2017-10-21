const query = require('../db_helper')

function add(obj) {

    var sql = `INSERT INTO article(id,summary,title,list,read_count,pub_time)
     VALUES('${obj.id}','${obj.summary}','${obj.title}','${obj.list}','${obj.read_count}','${obj.pub_time}')`;
    //增
    query(sql, function (err, result, fields) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:', result);
        console.log('-----------------------------------------------------------------\n\n');
    })

}

function dele() {

}

function update() {

}

function select(page, size, type, callback) {
    var sql = `SELECT * FROM article WHERE list LIKE '%${type}%' LIMIT ${Number(page) * Number(size)},${Number(size)};`;
    query(sql, function (err, rows, fields) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message)
            return;
        }
        callback({
            list: rows
        });
    })
}

function getArticleById(id, callback) {
    var sql = `SELECT * FROM article where id = ${id}`;
    query(sql, function (err, rows, fields) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        callback({
            article: rows[0]
        });
    })
}

function addArticleReadcount(id,callback){
    var sql = `UPDATE article SET read_count = (read_count + 1) WHERE id = ${id}`;
    query(sql,function(err,info){
        if(err){
            console.log('[UPDATE ERROR] - ', err.message);
            return;
        }
        callback(info);
    })
}

module.exports = {
    add: add,
    dele: dele,
    update: update,
    select: select,
    getArticleById: getArticleById,
    addArticleReadcount: addArticleReadcount
}