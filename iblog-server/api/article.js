const articleDao = require('../utils/db_mysql_util/dao/article_dao')
const url = require('url')
const readMD = require('../utils/fs_util/read_md')

function list(req, res) {
    let query = url.parse(req.url,true).query
    let page = query.page
    let size = query.size
    articleDao.select(page,size,function (list) {
        console.log(list)
        res.writeHead(200, {
            'Content-Type': 'application/json;charset=UTF-8'
        })
        res.end(JSON.stringify(list))
    })
}

function detail(req, res) {
    // let pathname = url.parse(req.url).pathname
    // let id = pathname.match(/\d+$/)
    let query = url.parse(req.url,true).query
    let id = query.id
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