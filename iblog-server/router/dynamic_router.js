

function DynamicRouter(req,res,pathname) {
    pathname = pathname.replace(/\/\d+$/,'')
    let callback = this.routes[pathname]
    if (typeof callback == 'function') {
        callback(req, res)
    } else {
        res.end('404')
    }
}

module.exports = DynamicRouter