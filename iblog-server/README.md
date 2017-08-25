# TomDog

这是用原生Node.js造的一个的轮子， 简单的路由管理webserver

## 功能
1. 提供后端接口服务和静态资源服务
2. 静态资源实现了缓存机制，有效降低服务器负载，提高了浏览器端的体验性
3. 路由配置很方便，只需几行代码就可，详见下面的使用说明

## 使用说明
1. 引入，创建
```
const TomDog = require('./TomDog')
const td = new TomDog()
```
2. **配置后端接口对应的路由，编写相应的接口服务模块**
```
// 配置路由
let routes = {
    '/': home,
    '/api/article/list': list,
    '/api/article/detail': detail
}

// 设置回调函数，引入接口服务
const articleApi = require('./api/article')

function home(req,res){
    // 根目录是加载主页
    staticRouter(req,res,'static/index.html')
}

function list(req,res){
    // 调用list方法，实现 '/api/article/list' 接口的获取文章列表功能
    articleApi.list(req,res)
}

function detail(req,res){
     // 调用detail方法，实现 '/api/article/detail'  接口的获取文章详情功能
    articleApi.detail(req,res)
}
```

3. 使用路由
```
td.useRouter(routes)
```

4. 启动 
```
td.run(9090)
```

## 展望
1. 目前这个轮子还未完善，以后会不断迭代
2. 主要迭代方向为： HTTPS, 流媒体服务，ETag缓存机制等


