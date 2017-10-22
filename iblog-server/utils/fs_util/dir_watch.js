
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

function watchMDFiles() {
  const path = './static/mds'
  getTargetName()
    .then(function (list) {
      rename(list);
    })
}

function rename(list) {
  const path = './static/mds'
  fs.readdir(path, function (err, files) {
    if (err) {
      console.log(err);
      return;
    }
    list = list.map(function(val){
      return val.id + '.md'
    })
    var targetList = files.minus(list)
    console.log(targetList)
    targetList.forEach(function (filename) {
      // 重命名
      let name = Math.random().toString(12).substr(2)
      let newName = name + '.md'
      fs.renameSync(path + '/' + filename, path + '/' + newName)
      inputDB(newName)
    });
  });
}

function getTargetName() {
  return new Promise(function (resolve,reject) {
    articleDao.getIdList(function (data) {
      var list = data.list
      resolve(list)
    });
  })
}


function inputDB(newName){
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
      id: newName.split('.')[0],
      summary: '',
      title: title,
      list: list
    })
  })
}


function getTime(date) {
  var y = date.getFullYear()
  var m = to2(date.getMonth() + 1)
  var d = to2(date.getDate())
  var h = to2(date.getHours())
  var m = to2(date.getMinutes())
  var s = to2(date.getSeconds())
  return `${y}-${m}-${d} ${h}:${m}:${s}`
}

function to2(val) {
  return val > 9 ? '' + val : '0' + val
}

module.exports = {
  build: build,
  watchMDFiles: watchMDFiles
}

Array.jiao = function () {
  var result = new Array();
  var obj = {};
  for (var i = 0; i < arguments.length; i++) {
    for (var j = 0; j < arguments[i].length; j++) {
      var str = arguments[i][j];
      if (!obj[str]) {
        obj[str] = 1;
      }
      else {
        obj[str]++;
        if (obj[str] == arguments.length) {
          result.push(str);
        }
      }//end else
    }//end for j
  }//end for i
  return result;
}

Array.prototype.minus = function (arr) {
  var result = new Array();
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
  }
  for (var j = 0; j < this.length; j++) {
    if (!obj[this[j]]) {
      obj[this[j]] = 1;
      result.push(this[j]);
    }
  }
  return result;
};