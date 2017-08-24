# iblog-vue

iBlog的Vue.js版本

> 博客地址： [http://www.markcoding.cn:9090/](http://www.markcoding.cn:9090/)

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

#### 2017/08/22
1. 分类功能完成,初步部署到了腾讯云主机上面（买的是Ubuntu）
2. 解决了Ubuntu上导入Windows文件后，文件名中文乱码的bug

```
其实是用了重命名的方式替代中文命名，每当md文件放入mds文件夹时，
fs的watch模块监听，然后会在回调函数中加一个重命名功能，命名
为`state.ino`,(state是一个文件状态对象，回调函数传入的第二个参数)
貌似这个值是唯一的
```

3. 在md文件中加入了配置参数，每当文件放入mds文件夹时，程序自动读取参数，存入数据库。在每次取出md文件的内容时，先过滤配置参数，然后再将内容输出
4. 对路由缓存进一步认识，可以动态的控制哪些组件被缓存，哪些不被缓存
5. 对不合法请求参数进行了过滤，不合法时，会抛出`404 Bad Request`异常

#### 2017/08/24
中间短暂停留了一天，因为一些琐事

总的来说，1.0版本在今天写完了

1. 使用PM2，让Node进程在挂了的情况下，也能立马自动重启，降低了服务器崩溃的风险
2. 点击浏览器的刷新按钮时，路由不改变。此时用了一个原生的方法解决了这个问题。。
```
window.location.hash = '/home/main'  // 主页的hash
```
3. 前面的前面提到，Node断开与MySQL的连接时，会遇到关闭连接失败的问题，今天总算找到了替代方案，使用连接池能解决这个bug
4. 1.0版本主要是信息展示功能，没有涉及到权限管理，评论等。后续会迭代出新版本，将常见的博客功能加入
5. 总体来说，模仿hexo的大部分功能，比如界面风格，以及markdown文件自动入库（相当于一个后台管理->发布文章的功能）