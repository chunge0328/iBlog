# iBlog
旨在打造一个多版本，小清新的博客系统，后端Node.js ，前端Vue单页

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
1. 自己动手造了一个轮子 -- 我叫它`TomDog`，是一个路由管理的迷你框架
2. 用`Node.js`中`fs`模块的`watch`，实现了markdown文件添加到文件夹mds时，信息自动录入数据库功能
3. 使用的是我的腾讯云主机上的MySql数据库，使用Navcat客户端本地查看
3. 写完了获得博客列表的接口
4. 写完了博客详情的接口
5. 关于`TomDog`,移步于[这里](./iblog-server) 

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

### 2017/08/22
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

### 2017/08/24
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

#### 2017/09/08
中间断了一段时间，由于秋招各种忙，昨天把博客的功能完善了下，主要是一下几方面：
1. 列表页增加浏览量与发布日期显示功能
2. 详情页增加了添加评论功能，评论列表展示的功能
3. 主题风格稍微改变了下，字体样式做了微小调整

遇到的一些问题：
1. 若给出一个详情页地址，点击该地址无法直接跳转到详情页，而是跳转到主页 ？？？ 
2. 若使用Vue路由中的History模式，类似上述的操作，会导致404
3. Vue中若使用`this._props.xxx`去获得属性值的话，在`mouted`钩子函数中使用会报错（获得属性值的目的是为了从列表页->详情页传值）
4. 于是换了一种方式，用`this.$route.params.xx`传值，可以在`mouted`函数中获得对应传来的值
5. 在发表评论成功后，评论列表实时更新的这个需求上：
  - 发表评论、评论列表是两个兄弟组件，实现此需求要求掌握通信方式
  - 通信方式使用了Vue的自定义事件，发表评论组件(CommentForm.vue)发布事件，评论列表组件(CommentList.vue)订阅事件
  - `bus.$emit('comment-add',true) // 用于发布一个事件，也即消息发送者`
  - `bus.$on('comment-add', function(){}) // 用于订阅一个事件，也即消息接受者`
  - `bus`是一个事件中心，由`new Vue()`导出 
6. 使用`this.$http.get`时，回调函数的参数会是一个`res.body.xxx`，而不是`res.xxx`(xxx即输出的JSON对象)


### 2017/10/22
- 博客文件更新业务的方案换了
	- 原来的方案是使用`fs.watch`方式，监听文件的变化，进行入库的操作
	- 现在的方案是：需要手动更新。因为发现原来的方案有bug。博客md文件更新后的做法为是先获得数据库中的list，以及获得文件夹中的文件目录files,然后求出差集。差集就是增加的文件列表。然后再对差集进行入库操作

- 重命名的方案换了
	- 原来的方案是使用`state.ino`进行命名
	- 现在采用随机数的形式命名：`Math.random().toString(12).substr(2)`

- 对HTTPS做了个尝试，后续尝试使用HTTPS