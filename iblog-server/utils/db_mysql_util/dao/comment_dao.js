const query = require('../db_helper')

/**
 * 通过文章id获得评论列表
 * @param {*博客id} id 
 */
function getCommentsById(id,callback) {
    var sql = `SELECT * FROM acomment WHERE art_id = '${id}'`
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

/**
 * 添加文章评论
 */
function addComment(comment, callback) {
    var sql = `INSERT INTO acomment (art_id,content,unick,uip,time,email) VALUES('${comment.id}','${comment.content}','${comment.unick}','${comment.ip}','${comment.time}','${comment.email}')`
    query(sql, function (err, info) {
        if (err) {
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        console.log('--------------------------INSERT----------------------------');
        console.log('INSERT ID:', info);
        console.log('-----------------------------------------------------------------\n\n')
        callback(info)
    })
}

module.exports = {
    addComment: addComment,
    getCommentsById: getCommentsById
}