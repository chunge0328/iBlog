const TomDog = require('./TomDog')
const staticRouter = require('./router/static_router')


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
    staticRouter(req,res,'static/index.html')
}

function list(req,res){
    articleApi.list(req,res)
}

function detail(req,res){
    articleApi.detail(req,res)
}

