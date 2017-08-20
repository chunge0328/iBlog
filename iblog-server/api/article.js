const articleDao = require('../utils/db_mysql_util/dao/article_dao')
const url = require('url')
const readMD = require('../utils/fs_util/read_md')

function list(req, res) {
    articleDao.select(function (list) {
        console.log(list)
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=UTF-8'
        })
        res.end(JSON.stringify(list))
    })
}

function detail(req, res) {
    let pathname = url.parse(req.url).pathname
    let id = pathname.match(/\d+$/)
    console.log('id is : ', id)
    articleDao.getArticleById(id, function (data) {
        let article = data.article
        readMD(article.name, function (data) {
            article.content = data.toString()
            res.writeHead(200, {
                'Content-Type': 'application/json;charset=UTF-8'
            })
            res.end(JSON.stringify(article))
        })
    })
}

module.exports = {
    list: list,
    detail: detail
}