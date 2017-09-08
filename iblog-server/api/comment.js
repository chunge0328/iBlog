const url = require('url')
const commentDao = require('../utils/db_mysql_util/dao/comment_dao')
const dateUtil = require('../utils/date_util/index')

function add(req,res) {
    let query = url.parse(req.url, true).query
    let comment = {
        id: query.id,
        content: query.content,
        unick: query.unick,
        time: dateUtil.formatDate(new Date()),
        email: query.email
    }
    commentDao.addComment(comment, function (info) {
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=UTF-8'
        })
        var json = { result: true }
        res.end(JSON.stringify(json))
    })
}

function list(req,res){
    let query = url.parse(req.url,true).query
    let id = query.id
    commentDao.getCommentsById(id,function(data){
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=UTF-8'
        })
        res.end(JSON.stringify(data))
    })
}

module.exports = {
    add: add,
    list: list
}