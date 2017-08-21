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
5. 关于TomDog,移步于[这里](../../iblog-server) 

### 2017/08/21
1. 完成前后端联调，前端页面成功展示数据
2. 在实现列表页进入详情页时，遇到了一个问题：
```
当从列表页进入详情页后
如何能在页面后退时还原数据和滚动条位置
使用Vuex状态管理？ 使用localStorage记录滚动位置与列表数据？
最终使用了Vue2.0中的一个重要特性：keep-alive组件

它用来缓存组件,避免多次加载相应的组件,减少性能消耗

<keep-alive>
<component>
  <!-- 组件将被缓存 -->
</component>
</keep-alive>

所以在router-view外围加一个keep-alive即可解决这个问题

<keep-alive><router-view></router-view></keep-alive>
```
3. 在用Node.js断开与MySQL的连接时，出现了问题
```
 若使用`conn = null`制空的方法，这种方法看似有效，但是在多次数据库操作后，会报错，
 错误原因显示`too many connections ...`，应该就是说，`conn = null`并没有让连接真的断开
 ```
4. 展示功能大致完成