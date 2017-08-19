# iblog-vue

iBlog的Vue.js版本

## 开发周期

### 2017/08/19 
1. 界面风格确定 -- 类似Hexo中的Next主题风格，清新而带感
2. 搭建`Vue.js`环境,相关技术栈如下：
	- vue-cli  -- 初始化项目的脚手架 
	- vue-router -- 管理路由
	- aiox  -- Ajax通信
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



