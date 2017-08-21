## 写在前面
1. 安装环境前，默认安装了`node`环境
2. 会使用基本的命令行操作

## 步骤

### 初始化环境
1. 新建一个文件夹
2. 在文件夹打开命令行
```
npm init
```
一直回车默认选项就可以啦，也可以自己设置

最后一次回车结束后，会生成一个`package.json`文件

### 安装`gulp`
1. 若是第一次使用`gulp`，则需要先全局安装`gulp`
```
npm install --global gulp
```

2. 若已经全局安装`gulp`,则直接在工程根目录下：
```
npm install gulp --save-dev 
```
3. 输入gulp -v,显示版本说明安装成功

### 安装`browser-sync`
```
npm install browser-sync --save-dev
```

### 配置`gulpfile`文件
```
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    var files = [
    '**/*.html',   // 监听html
    '**/*.css', // 监听css
    '**/*.js' // 监听js
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['browser-sync']); 
```
### 测试
在工程根目录下打开命令行运行：
```
gulp
```

若上述无错误，将会在浏览器打开3000端口，这时输入相应的`文件名.html`就可以访问页面并实时刷新。比如有一个文件名叫`主页.html`，在浏览器地址栏输入`http://localhost:3000/主页.html`即可。