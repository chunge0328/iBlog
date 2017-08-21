

function DynamicRouter(req,res,pathname) {
    let callback = this.routes[pathname]
    if (typeof callback == 'function') {
        callback(req, res)
    } else {
        res.end('404')
    }
}

module.exports = DynamicRouter