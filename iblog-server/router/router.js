const url = require("url")
const staticRouter = require('./static_router')
const dynamicRouter = require('./dynamic_router')

function Router(req,res) {
    // 这里的this也是TomDog的实例，this的传递过程为：从index.js -> server.js -> router.js(当前)
    //得到用户的路径
    let pathname = url.parse(req.url).pathname
    if(/\.\w+/.test(pathname)){
        // static res
        staticRouter.call(this,req,res,pathname)
    }else{
        dynamicRouter.call(this,req,res,pathname)
    }
    console.log('obj ', url.parse(req.url,true))
    
}

module.exports = Router