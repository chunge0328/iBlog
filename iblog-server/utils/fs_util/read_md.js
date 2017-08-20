const fs = require('fs')

function readMD(name,callback) {
    let path = './static/mds/' + name
    fs.stat(path, function (err, state) {
        if (!err) {
            fs.readFile(path,function(err, data){
                if(err){
                    console.log(err)
                    return
                }
                callback(data);
            })
        }else{
            console.log(err)
        }
    })
}

module.exports = readMD