const articleDao = require('../utils/db_mysql_util/dao/article_dao')
const url = require('url')
const readMD = require('../utils/fs_util/read_md')

function list(req, res) {
    let query = url.parse(req.url, true).query
    let page = Number(query.page)
    let size = Number(query.size)
    let type = query.type
    if (isNaN(page)
        || isNaN(size)
        || typeof type !== 'string') {
        res.writeHead(400, { 'Content-Type': 'application/json;charset=UTF-8' })
        res.end('400 Bad Request')
        return;
    }
  
    articleDao.select(page, size, type, function (list) {
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
    let query = url.parse(req.url, true).query
    let id = query.id
    articleDao.getArticleById(id, function (data) {
        let article = data.article
        readMD(article.id + '.md', function (data) {
            let content = data.toString()
            let index = content.search(/====/)
            let configStr = content.substring(0, index)
            content = content.slice(index + 4)
            article.content = content
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