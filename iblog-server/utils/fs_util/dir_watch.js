
const fs = require('fs')
const articleDao = require('../db_mysql_util/dao/article_dao')

const path = '../../static/mds'
fs.watch(path, function (event, filename) {
  // console.log('event is: ' + event);
  if(event == 'rename'){ // 有文件变化
    fs.stat(path+'/'+filename,function(err,state){
      if(err){
        // 删除
      }else{
        // 增加
        var d = new Date().getTime()
        var r = 1000*Math.random()+1000;
        articleDao.add({
          id: state.ino,
          summary: '',
          name: filename
        })
         console.log('err - ',err)
       console.log('state - ', state.ino)
      }
     
    })
  }
  // if (filename) {
  //   console.log('filename provided: ' + filename + '\n\n ');
  // } else {
  //   console.log('filename not provided');
  // }
});