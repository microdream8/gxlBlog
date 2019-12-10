---
title: '基于webpack从0配置vue开发'
sidebar: auto
collapsable: true
---

# 基于webpack从0配置vue开发
vue 官方为了让开发者快速进行开发，为了很大的精力，提供了vue-cli脚手架，只需简单几步，就能开始vue的开发了。

然而，对项目里的webpack封装和配置了解的不清楚，就容易导致出问题不知如何解决，甚至不会通过webpack去扩展新功能，对webpack+vue项目究竟是怎样搭建起来的感到一脸懵逼。

本文就是要解决这个问题。

## 初始化项目：
在你想生成文件的目录下，打开命令行执行 npm init 然后一路回车就行了，主要是生成一些项目基本信息。最后会生成一个 package.json 文件

二、安装webpack及脚手架
npm install webpack -D
npm install -D webpack-cli
1
2
三、ES6+转码为ES5及适思考配浏览器:
配置 ES6/7/8 转 ES5代码
安装相关依赖

npm install babel-loader @babel/core @babel/preset-env -D
1
根目录下新建一个src文件夹，然后再建一个main.js文件,写2句代码

// src/main.js
let i = 4.0;
console.log('hello webpack'+ i);
1
2
3
webpack.config.js文件
在项目根目录下增加webpack.config.js文件，然后写入下面这份简单的配置：

module.exports = {
    mode: 'development',// 指定开发者打包模式
    entry : './src/main.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path :  __dirname+'/public'//输出文件路径
    },
    module : {
        rules: [
            {/*将js或者jsx文件转码成es5*/
                test: /\.jsx?$/,// 正则惰性匹配后缀名为js或者jsx的文件
                exclude: /node_modules/,//排除这个文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
        ]
    },
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
然后在package.json的scripts先添加下面这个指令：

"build": "webpack --config ./webpack.config.js",
1
最后运行:

npm run build
1
可以看到根目录会生成一个public文件夹，而且下面有一个由src/main.js打包出来的index.js
思考：
babel-loader可以将ES6代码转为ES5代码，从而可以在现有环境执行，所以我们可以用ES6编写，而不用考虑环境支持的问题；有些浏览器版本的发布早于ES6的定稿和发布，因此如果在编程中使用了ES6的新特性，而浏览器没有更新版本，或者新版本中没有对ES6的特性进行兼容，那么浏览器就会无法识别ES6代码，例如IE9根本看不懂代码写的let和const是什么东西？只能选择报错，这就是浏览器对ES6的兼容性问题；我们可以通过 babel-polyfill 对一些不支持新语法、兼容性差的客户端提供新语法的实现。

这个思考由你来完成吧，如果你不想加入可以跳过，不影响后面的操作

四、使用 html-webpack-plugin来创建html页面
1.安装html-webpack-plugin插件

npm install html-webpack-plugin -D
1
2.添加入口文件
在根目录下增加index.html文件，添加下面代码：

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>hellow diyVue</title>
</head>
<body>
  <div id="app"></div>
<script type="text/javascript" src="index.js"></script></body>
</html>
1
2
3
4
5
6
7
8
9
10
11
12
3.修改webpack.config.js配置

const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',// 指定开发者打包模式
    entry : './src/main.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path :  __dirname+'/public'//输出文件路径
    },
    module : {
        rules: [
            {/*将js或者jsx文件转码成es5*/
                test: /\.jsx?$/,// 正则惰性匹配后缀名为js或者jsx的文件
                exclude: /node_modules/,//排除这个文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
            filename: 'index.html', // 打包后的文件名，默认是index.html
            template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
        })
    ]
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
4.查看效果
运行npm run build ，我们可以看到public文件夹下有一个index.html生成了，而且还引入了src/main.js的压缩包index.js

五、安装配置并使用vue
1.安装插件及vue

npm install vue-loader vue-template-compiler cache-loader thread-loader -D
npm install vue -S
1
2
vue-loader 用于解析.vue文件
vue-template-compiler 用于编译模板
cache-loader 用于缓存loader编译的结果
thread-loader 使用 worker 池来运行loader，每个 worker 都是一个 node.js 进程。
2.修改webpack.config.js配置

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackplugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',// 指定开发者打包模式
    entry : './src/main.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path :  __dirname+'/public'//输出文件路径
    },
    module : {
        rules: [
            {/*将js或者jsx文件转码成es5*/
                test: /\.jsx?$/,// 正则惰性匹配后缀名为js或者jsx的文件
                exclude: /node_modules/,//排除这个文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
            {
                test: /\.vue$/,
                use: [
                  {
                    loader: 'cache-loader'
                  },
                  {
                    loader: 'thread-loader'
                  },
                  {
                    loader: 'vue-loader',
                    options: {
                      compilerOptions: {
                        preserveWhitespace: false
                      },
                    }
                  }
                ]
              },
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
            filename: 'index.html', // 打包后的文件名，默认是index.html
            template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
        }),
        new VueLoaderPlugin()
    ]
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
3.使用vue
在 src 新建一个 App.vue：

<template>
  <div class="App">
    Hello {{msg}}
  </div>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
        msg: "diyVue",
    };
  }
};
</script>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
修改src/main.js的代码：

import Vue from 'vue'
import App from './App.vue'

new Vue({
  render: h => h(App)
}).$mount('#app')
1
2
3
4
5
6
4.打包及运行vue
再次运行npm run build,然后在浏览器打开public/index.html，可以发现vue已经可以运行了


六、安装本地服务及代码热更新
1.安装webpack-dev-server

npm install webpack-dev-server -D
1
2.修改webpack.config.js配置

// ...
    devServer: { //node本地服务器
        host: '127.0.0.1',
        port: 8010
    },
// ...
1
2
3
4
5
6
3.在package.json的scripts中增加一行启动本地服务指令：

"dev": "webpack-dev-server --env.dev",
1
4.运行以及查看效果

运行npm run dev

浏览器打开http://127.0.0.1:8010/

我们可以发现本地服务已经成功启动了，而且当我们修改src/app.vue的代码后，浏览器是会自动刷新的(热更新)。一个简单的vue项目我们已经搭建出来了，之后我们可以像堆积木一样添加自己想要的功能了。
提醒:devServer生成的文件是存在我们电脑的内存中的，不在我们的硬盘上(不落盘)，可以通过查看public文件夹知道，我们改动代码后这文件夹下的内容是不会变更的。
七、安装Vue-Router组件
1.安装

npm install vue-router --save
1
2.创建相关文件及编写代码

新增视图组件在 src 目录下新增两个视图组件 src/view/page1.vue 和 src/view/page2.vue
page1:
<template>
  <div class="page1">
    <h2>page1</h2>
  </div>
</template>
1
2
3
4
5
page2:

<template>
  <div class="page2">
    <h2>page2</h2>
  </div>
</template>
1
2
3
4
5
在 src 目录下新增一个 router/index.js 文件
import Vue from 'vue'
import VueRouter from "vue-router";
import page1 from '../view/page1.vue';
import page2 from '../view/page2.vue';
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    },
    {
      path: '*',
      redirect: '/page2'
    }
  ]
})
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
修改 main.js 文件
import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
1
2
3
4
5
6
7
8
修改 App.vue 组件

<template>
  <div>
    <div class="App">
        Hello {{msg}}
    </div>
    <div>
        <router-link to="/page1">go page1</router-link>
        <router-link to="/page2">go page2</router-link>
        </div>
        <div>
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: 'App',

  data() {
    return {
        msg: "diyVue",
    };
  }
};
</script>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
3.运行及测试效果

运行npm run dev
测试效果：

到此为止的文件目录是这样的：

八、一口气配置基础组件
通过前面的学习，相信你已经基本掌握了堆积木的操作，为了节省时间接下我们一次性添加多几个积木
1.安装基础组件

npm install sass-loader dart-sass css-loader style-loader file-loader url-loader postcss-loader autoprefixer -D
1
sass-loader, dart-sass主要是将 scss/sass 语法转为css
css-loader主要是解析 css 文件
style-loader 主要是将 css 解析到html页面的style上
postcss-loader autoprefixer实现自动添加css3前缀
2.在webpack.config.js中增加配置
// ...
            {
                test: /\.(scss|sass)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require("autoprefixer") /*自动添加前缀*/
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
                use: [{
                  loader: 'url-loader',
                  options: {
                    limit: 10000
                  }
                }]
            }
            // ...
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
3.运行及测试
在src/App.vue后面加入下面样式代码：

// ...
<style lang="scss" scoped>
    .App{
        color:red;
    }
</style>
1
2
3
4
5
6
运行后，我们可以看到样式代码生效了


九、自定义环境变量和常量
通过 webpack提供的DefinePlugin插件，可以很方便的定义环境变量
1.我们先创建一个用来以后保存常量的文件，在根目录下添加config/constant.js

const NODE_ENV = process.env.NODE_ENV; // webpack编译是获取node环境的配置信息
const config = {
     production: { // 生产环境(线上环境)
        DOMAIN: 'production.com', // 上线域名、地址
        FOO_API: 'production.foo.api.com', // api变量
        BAR_API: 'production.bar.api.com', // api变量
        BAZ_API: 'production.baz.api.com', // api变量
     },
     development: { // 开发环境
        DOMAIN: 'development.com', // 测试域名、地址
        FOO_API: 'development.foo.api.com', // api变量
        BAR_API: 'development.bar.api.com', // api变量
        BAZ_API: 'development.baz.api.com', // api变量
     }
}
module.exports = config[NODE_ENV];
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
2.修改webpack.config.js文件

const webpack = require('webpack');
const constant = require('./config/constant'); // 引入常量文件
// ...
plugins:[
        // ...
        new webpack.DefinePlugin({ // 定义全局变量
          CONSTANT: JSON.stringify(constant)
        })
    ],
1
2
3
4
5
6
7
8
9
3.修改package.json

"scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server",
    "build": "cross-env NODE_ENV=production webpack --config ./webpack.config.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
1
2
3
4
5
cross-env用来磨平mac和win中的node环境之间的不同，所以我们需要安装一下
npm install cross-env -D
1
NODE_ENV=development和NODE_ENV=production指定node环境
4.运行及调试

由于修改了webpack.config.js所以需要重新运行npm run dev
在src/main.js后面加上一句测试代码：console.log(CONSTANT);
配置成功打印出来

十、区分开发环境打包跟生产环境打包
在config下新建两个文件

webpack.dev.js 开发环境使用
webpack.prod.js 生产环境使用
webpack.config.js 公用配置
公共配置webpack.config.js

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackplugin = require('html-webpack-plugin');
const webpack = require('webpack');
const constant = require('./config/constant'); // 引入常量文件
module.exports = {
    entry : './src/main.js',//入口文件
    output : {//输出文件
        filename : 'index.js',//输出文件名
        path :  __dirname+'/public',//输出文件路径
        // publicPath: "public", // 虚拟目录，自动指向path编译目录，放在内存中，所以在硬盘上是找不到的 默认是：/
    },
    module : { // 当执行require或import命令时匹配下面的加载规则
        rules: [
            {/*将js或者jsx文件转码成es5*/
                test: /\.jsx?$/,// 正则惰性匹配后缀名为js或者jsx的文件
                exclude: /node_modules/,//排除这个文件夹
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
            },
            { // vue文件处理
                test: /\.vue$/,
                use: [
                  {
                    loader: 'cache-loader'
                  },
                  {
                    loader: 'thread-loader'
                  },
                  {
                    loader: 'vue-loader',
                    options: {
                      compilerOptions: {
                        preserveWhitespace: false
                      },
                    }
                  },
                ]
            },
            // { // 文件资源加载 变成base64会跟下面图片资源处理冲突所以注释了
            //     test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
            //     use: [{
            //       loader: 'url-loader',
            //       options: {
            //           name: '[name].[ext]'
            //       }
            //     }]
            // },
            { // 图片资源处理
                test: /\.(png|jpg|gif|svg)/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]',
                        outputPath: "public/assets/", // 输出目录
                        limit: 8192,
                    }
                }]
            }
        ]
    },
    plugins:[
        new HtmlWebpackplugin({
            filename: 'index.html', // 打包后的文件名，默认是index.html
            template: path.resolve(__dirname, 'index.html') // 导入被打包的文件模板
        }),
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({ // 定义全局变量
          CONSTANT: JSON.stringify(constant)
        })
    ],
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
开发环境

不需要压缩代码
需要本地服务和热更新
css不需要提取到css文件
sourceMap
const merge = require('webpack-merge')
const webpackConfig = require('../webpack.config')
module.exports = merge(webpackConfig, {
  devtool: 'cheap-module-eval-source-map',
  mode: 'development',// 指定开发者打包模式
  devServer: { //node本地服务器
      host: '127.0.0.1',
      port: 8010
  },
  module : {
      rules: [
        {
          test: /\.(scss|sass)$/,
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: 'sass-loader',
                    options: {
                        implementation: require('dart-sass')
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require("autoprefixer") /*自动添加前缀*/
                        ]
                    }
                }
            ]
        },
      ]
  },
})
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
生产环境

压缩代码
不需要本地服务和热更新
提取css，压缩css文件
sourceMap
构建前清除上一次构建的内容
const path = require('path')
const merge = require('webpack-merge')
const webpack = require('webpack')
const webpackConfig = require('../webpack.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssnanoPlugin = require('@intervolga/optimize-cssnano-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = merge(webpackConfig, {
    mode: 'production',// 指定开发者打包模式压缩js代码
    devtool: '#source-map',
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              name: 'chunk-vendors',
              test: /[\\\/]node_modules[\\\/]/,
              priority: -10,
              chunks: 'initial'
            },
            common: {
              name: 'chunk-common',
              minChunks: 2,
              priority: -20,
              chunks: 'initial',
              reuseExistingChunk: true
            }
          }
        }
    },
    module: {
        rules: [
          {
            test: /\.(scss|sass)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader
              },
              {
                loader: 'css-loader',
                options: {
                  importLoaders: 2
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  implementation: require('dart-sass')
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                    plugins: [
                        require("autoprefixer") /*自动添加前缀*/
                    ]
                }
              }
            ]
          },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new OptimizeCssnanoPlugin({
          sourceMap: true,
          cssnanoOptions: {
            preset: [
              'default',
              {
                mergeLonghand: false,
                cssDeclarationSorter: false
              }
            ]
          }
        }),
        new CopyWebpackPlugin([
          {
            from: path.resolve(__dirname, '../public'),
            to: path.resolve(__dirname, '../dist')
          }
        ]),
        new CleanWebpackPlugin(), // 用于删除上次构建的文件
    ]
})
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
安装所需依赖

npm i @intervolga/optimize-cssnano-plugin mini-css-extract-plugin clean-webpack-plugin webpack-merge copy-webpack-plugin -D
1
@intervolga/optimize-cssnano-plugin 用于压缩css代码
mini-css-extract-plugin 用于提取css到文件中
clean-webpack-plugin 用于删除上次构建的文件
webpack-merge 合并 webpack配置
copy-webpack-plugin 用户拷贝静态资源
图片资源路径名使用
修改src/App.vue

<template>
  <div>
    <div class="App">
        <img :src="imgUrl1">
        <div>Hello {{msg}}</div>
    </div>
    <div>
        <router-link to="/page1">go page1</router-link>
        <router-link to="/page2">go page2</router-link>
        </div>
        <div>
        <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  name: 'App',

  data() {
    return {
        msg: "diyVue",
        imgUrl1: require('./assets/logo.png'),
    };
  }
};
</script>
<style lang="scss" scoped>
    .App{
        color:red;
    }
</style>
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
这次的操作优化了图片资源的引用，我们执行npm run dev后，在浏览器打开项目，可以看到

优化前这个路径是base64位的，现在变成了一个普通的路径。

总结：
vue-cli是一个封装得很完美的vue脚手架，所以它的适应性很强；但是有些大公司他们的前端项目一般不会直接套用这种脚手架，而是需要结合公司内部的组件一步步搭起一个vue前端项目。
单纯的vue架构是非常简单的，但是结合到node环境和webpack一起用的话，有一些不是太熟悉node、webpack的前端同学就会有些蒙圈。这个案例中，我们主要是搭建好了一个webpack环境，然后将需要的东西一件一件组装起来，虽然不算太完善，但是学会了这种思路的话，我们处理其他前端项目也不难了。

如果帮助到你了，就点赞，哈哈哈，不可能有赞的！