const TomDog = require('./TomDog')
const staticRouter = require('./router/static_router')


///////////////////// 使用TomDog///////////////////////////

const articleApi = require('./api/article')
const commentApi = require('./api/comment')
const td = new TomDog()
td.useRouter({
    '/': home,
    '/api/article/list': articleList,
    '/api/article/detail': articleDetail,
    '/api/comment/add': commentAdd,
    '/api/comment/list':commentList
})
td.run(9090)

function home(req,res){
    // 加载主页
    staticRouter(req,res,'static/index.html')
}

function articleList(req,res){
    articleApi.list(req,res)
}

function articleDetail(req,res){
    articleApi.detail(req,res)
}

function commentAdd(req,res){
    commentApi.add(req,res)
}

function commentList(req,res){
    commentApi.list(req,res)
}