# iblog-vue

iBlog的Vue.js版本

## 开发周期

### 2017/08/19 
1. 界面风格确定 -- 类似Hexo中的Next主题风格，清新而带感
2. 搭建开发环境，使用`vue-cli`脚手架初始化项目
3. 规划组件结构

```
│ 
├─ main.js  入口文件
│  
├─ assets
│     ├─ logo.png
│      
├─ components
│     ├─ ArticleItem.vue # 文章列表item
│     ├─ ArticleMain.vue # 文章详情页
│     ├─ Call.vue # 私信页
│     ├─ Categories.vue # 分类页 
│     ├─ Home.vue # 主页
│     ├─ Main.vue # 文章列表
│      
└─router
      ├─ index.js # 路由配置
        
```
4. 编写对应路由
5. 完成静态页面呈现假数据开发任务
<img src="http://ou1frpks8.bkt.clouddn.com/002.png" width=200 /> 
<img src="http://ou1frpks8.bkt.clouddn.com/001.png" width=200 />


### 2017/08/20
1. 自己动手造了一个轮子 -- 我叫它TomDog，是一个路由管理的迷你框架
2. 用Node.js中fs模块的watch实现了md文件自动添加到文件夹时，信息自动录入数据库功能
3. 使用的是我的腾讯云主机上的MySql数据库，使用Navcat客户端本地查看
3. 写完了获得博客列表的接口
4. 写完了博客详情的接口
5. 关于TomDog,移步于[这里](https://github.com/coderLius/iBlog/tree/master/iblog-server) 
