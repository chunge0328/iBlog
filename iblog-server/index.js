const server = require('./server/server')
const staticRouter = require('./router/static_router')
function TomDog() {}

TomDog.prototype.useRouter = function (routes) {
    this.routes = routes
}

TomDog.prototype.run = function (port, host) {
    this.port = port
    this.host = host
    server.call(this);
}

///////////////////// 使用TomDog///////////////////////////

const articleApi = require('./api/article')
const td = new TomDog()
td.useRouter({
    '/': home,
    '/api/article/list': list,
    '/api/article/detail': detail
})
td.run(9090)

function home(req,res){
    staticRouter(req,res,'static/index2.html')
}

function list(req,res){
    // console.log('list')
    articleApi.list(req,res)
}

function detail(req,res){
    articleApi.detail(req,res)
}

