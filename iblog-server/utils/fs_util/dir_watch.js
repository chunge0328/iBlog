
const fs = require('fs')
const articleDao = require('../db_mysql_util/dao/article_dao')
const readMD = require('./read_md')
const path = require('path')

function build() {
  const path = './static/mds'
  fs.readdir(path, function (err, files) {
    if (err) {
      console.log(err);
      return;
    }
    var count = files.length;
    files.forEach(function (filename) {
      fs.stat(path + '/' + filename, function (err, stats) {
        if (err) throw err;
        //文件
        if (stats.isFile()) {
          // 重命名
        
          readMD(filename, function (data) {

            let content = data.toString()
            let index = content.search(/====/)
            let configStr = content.substring(0, index)
            // content = content.slice(index + 4)
            // 容错性处理暂时没做
            let configObj = JSON.parse(configStr)
            let summary = configObj.summary
            let title = configObj.title
            let list = configObj.list.join(',')
            let read_count = 0
            let pub_time = new Date()
            // 增加
            articleDao.add({
              id: filename.split('.')[0],
              summary: '',
              title: title,
              list: list,
              read_count: read_count,
              pub_time: getTime(pub_time)
            })
          })
        }
      });
    });
  });
}


function getTime(date){
  var y = date.getFullYear()
  var m = to2(date.getMonth() + 1)
  var d = to2(date.getDate())
  var h = to2(date.getHours())
  var m = to2(date.getMinutes())
  var s = to2(date.getSeconds())
  return `${y}-${m}-${d} ${h}:${m}:${s}`
}

function to2(val){
  return val > 9 ? '' + val : '0' + val
}

module.exports = build
