
const fs = require('fs')
const articleDao = require('../db_mysql_util/dao/article_dao')
const readMD = require('./read_md')

function watchMDFiles() {
  const path = './static/mds'
  fs.watch(path, function (event, filename) {
    console.log('event is: ' + event);
    if (event == 'rename') { // 有文件变化
      fs.stat(path + '/' + filename, function (err, state) {

        if (err) {
          // 删除
        } else {
          // 重命名
          let name = Math.random().toString(12).substr(2)
          let newName = name + '.md'
          fs.renameSync(path + '/' + filename, path + '/' + newName)
          readMD(newName, function (data) {

            let content = data.toString()
            let index = content.search(/====/)
            let configStr = content.substring(0, index)
            // content = content.slice(index + 4)
            // 容错性处理暂时没做
            let configObj = JSON.parse(configStr)
            let summary = configObj.summary
            let title = configObj.title
            let list = configObj.list.join(',')
            // 增加
            articleDao.add({
              id: name,
              summary: '',
              title: title,
              list: list
            })
          })

        }

      })
    }
  });
}

module.exports = watchMDFiles
