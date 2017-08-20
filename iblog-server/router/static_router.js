const mime = require('./mime.js')
const fs = require('fs')


function StaticRouter(req, res, pathname) {
    let filePath = './' + pathname
    fs.stat(filePath, function (err, state) {
        let hasExtend = pathname.match(/\.\w+$/)
        if (state && hasExtend) {
            let mimeName = mime[hasExtend[0]]
            if (!mimeName) {
                res.writeHead(404, {
                    'Content-Type': 'text/html;charset=UTF-8'
                })
                res.end('404 Not Found')
                return false
            }
            let mtime = state.mtime.toGMTString();
            if (mtime == req.headers['if-modified-since']) {
                res.writeHead(304, {
                    'Content-Type': 'text/html;charset=UTF-8'
                })
                res.end('304 Not Modified')
            } else {
                let now = new Date()
                now.setFullYear(now.getFullYear + 1)
                let expires = now.toGMTString()
                let headData = {
                    'Content-Type': mimeName + '; charset=utf-8',
                    'Version': 'HTTP/1.1',
                    'Last-Modified': mtime || null,
                    'Cache-Control': 'private, max-age=31536000',
                    'Expires': expires,
                    'Content-Length': state.size || ''
                }
                res.writeHead(200, headData)

                let stream = fs.createReadStream(filePath)
                stream.pipe(res)
                stream.on('end', function () {
                    res.end()
                })
            }
        }else{
            res.writeHead(404,{
                'Content-Type': 'text/html;charset=UTF-8'
            })
            res.end('404 Not Found')
        }

    })
}

module.exports = StaticRouter