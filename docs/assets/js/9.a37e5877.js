(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{163:function(a,t,s){a.exports=s.p+"assets/img/wp_1.5cc17a09.jpeg"},230:function(a,t,s){a.exports=s.p+"assets/img/wp_2.8aafd44a.jpeg"},267:function(a,t,s){"use strict";s.r(t);var r=s(28),v=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"webpack相关的性能优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webpack相关的性能优化"}},[a._v("#")]),a._v(" webpack相关的性能优化")]),a._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),r("p",[a._v("Webpack优化可以分为"),r("b",[a._v("优化开发体验")]),a._v("和"),r("b",[a._v("优化输出质量")]),a._v("两部分")]),a._v(" "),r("h3",{attrs:{id:"优化开发体验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化开发体验"}},[a._v("#")]),a._v(" 优化开发体验")]),a._v(" "),r("p",[a._v("优化开发体验的目的是为了提升开发时的效率，其中又可以分为以下几点：")]),a._v(" "),r("h4",{attrs:{id:"优化构建速度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化构建速度"}},[a._v("#")]),a._v(" 优化构建速度")]),a._v(" "),r("p",[a._v("在项目庞大时构建耗时可能会变的很长，每次等待构建的耗时加起来也会是个大数目。")]),a._v(" "),r("h5",{attrs:{id:"缩小文件搜索范围"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缩小文件搜索范围"}},[a._v("#")]),a._v(" 缩小文件搜索范围")]),a._v(" "),r("ol",[r("li",[a._v("在配置 Loader 时通过 include 去缩小命中范围")])]),a._v(" "),r("img",{staticStyle:{width:"80%"},attrs:{src:s(163)}}),a._v(" "),r("ol",{attrs:{start:"2"}},[r("li",[a._v("优化 resolve.modules 配置，指明存放第三方模块的绝对路径，以减少寻找，配置如下：")])]),a._v(" "),r("img",{staticStyle:{width:"80%"},attrs:{src:s(163)}}),a._v(" "),r("ol",{attrs:{start:"3"}},[r("li",[r("p",[a._v("优化 resolve.mainFields 配置")])]),a._v(" "),r("li",[r("p",[a._v("优化 resolve.alias 配置")])]),a._v(" "),r("li",[r("p",[a._v("优化 resolve.extensions 配置\n在配置 resolve.extensions 时你需要遵守以下几点，以做到尽可能的优化构建性能：")])])]),a._v(" "),r("ul",[r("li",[a._v("后缀尝试列表要尽可能的小，不要把项目中不可能存在的情况写到后缀尝试列表中。")]),a._v(" "),r("li",[a._v("频率出现最高的文件后缀要优先放在最前面，以做到尽快的退出寻找过程。")]),a._v(" "),r("li",[a._v("在源码中写导入语句时，要尽可能的带上后缀，从而可以避免寻找过程。例如在你确定的情况下把 require('./data') 写成 require('./data.json')。")])]),a._v(" "),r("img",{staticStyle:{width:"80%"},attrs:{src:s(230)}}),a._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[a._v("优化 module.noParse 配置")])]),a._v(" "),r("h5",{attrs:{id:"使用-dllplugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-dllplugin"}},[a._v("#")]),a._v(" 使用 DllPlugin")]),a._v(" "),r("p",[a._v("为什么给 Web 项目构建接入 动态链接库 的思想后，会大大提升构建速度呢？ 原因在于包含大量复用模块的动态链接库只需要编译一次，在之后的构建过程中被动态链接库包含的模块将不会在重新编译，而是直接使用动态链接库中的代码。 由于动态链接库中大多数包含的是常用的第三方模块，例如 react、react-dom，只要不升级这些模块的版本，动态链接库就不用重新编译。")]),a._v(" "),r("h5",{attrs:{id:"使用-happypack"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-happypack"}},[a._v("#")]),a._v(" 使用 HappyPack")]),a._v(" "),r("p",[a._v("在整个 Webpack 构建流程中，最耗时的流程可能就是 Loader 对文件的转换操作了，因为要转换的文件数据巨多，而且这些转换操作都只能一个个挨着处理。（运行在 Node.js 之上的 Webpack 是单线程模型的）")]),a._v(" "),r("p",[a._v("HappyPack的核心原理就是把这部分任务分解到多个进程去并行处理，从而减少了总的构建时间。")]),a._v(" "),r("h5",{attrs:{id:"使用-paralleluglifyplugin"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用-paralleluglifyplugin"}},[a._v("#")]),a._v(" 使用 ParallelUglifyPlugin")]),a._v(" "),r("p",[a._v("ParallelUglifyPlugin 会开启多个子进程，把对多个文件的压缩工作分配给多个子进程去完成，每个子进程其实还是通过 UglifyJS去压缩代码，但是变成了并行执行。 所以 ParallelUglifyPlugin 能更快的完成对多个文件的压缩工作。")]),a._v(" "),r("h4",{attrs:{id:"优化使用体验"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化使用体验"}},[a._v("#")]),a._v(" 优化使用体验")]),a._v(" "),r("p",[a._v("通过自动化手段完成一些重复的工作，让我们专注于解决问题本身。")]),a._v(" "),r("h5",{attrs:{id:"使用自动刷新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#使用自动刷新"}},[a._v("#")]),a._v(" 使用自动刷新")]),a._v(" "),r("p",[a._v("使用 webpack 模块负责监听文件，webpack-dev-server 模块则负责刷新浏览器。")]),a._v(" "),r("h5",{attrs:{id:"开启模块热替换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开启模块热替换"}},[a._v("#")]),a._v(" 开启模块热替换")]),a._v(" "),r("h3",{attrs:{id:"优化输出质量"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化输出质量"}},[a._v("#")]),a._v(" 优化输出质量")]),a._v(" "),r("p",[a._v("优化输出质量的目的是为了给用户呈现体验更好的网页，例如减少首屏加载时间、提升性能流畅度等。 这至关重要，因为在互联网行业竞争日益激烈的今天，这可能关系到你的产品的生死。")]),a._v(" "),r("p",[a._v("优化输出质量本质是优化构建输出的要发布到线上的代码，分为以下几点：")]),a._v(" "),r("h4",{attrs:{id:"减少用户能感知到的加载时间，也就是首屏加载时间"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#减少用户能感知到的加载时间，也就是首屏加载时间"}},[a._v("#")]),a._v(" 减少用户能感知到的加载时间，也就是首屏加载时间")]),a._v(" "),r("ol",[r("li",[r("p",[a._v("区分环境")])]),a._v(" "),r("li",[r("p",[a._v("压缩代码")])]),a._v(" "),r("li",[r("p",[a._v("CDN加速")])]),a._v(" "),r("li",[r("p",[a._v("使用Tree Shaking\nTree Shaking 可以用来剔除 JavaScript 中用不上的死代码（没用到的代码）。它依赖静态的 ES6 模块化语法，例如通过 import 和 export 导入导出。")])]),a._v(" "),r("li",[r("p",[a._v("提取公共代码")])]),a._v(" "),r("li",[r("p",[a._v("按需加载")])])]),a._v(" "),r("h4",{attrs:{id:"提升流畅度，也就是提升代码性能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#提升流畅度，也就是提升代码性能"}},[a._v("#")]),a._v(" 提升流畅度，也就是提升代码性能")]),a._v(" "),r("ol",[r("li",[a._v("使用 Prepack")]),a._v(" "),r("li",[a._v("开启 Scope Hoisting")])]),a._v(" "),r("h2",{attrs:{id:"多线程打包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#多线程打包"}},[a._v("#")]),a._v(" 多线程打包")]),a._v(" "),r("p",[a._v("这是打包速度方面的优化")]),a._v(" "),r("p",[a._v("webpack默认使用uglify进行打包，是单线程的打包模式，可以使用异步的加载方式，happypack、parellelUglify多线程运行。")]),a._v(" "),r("p",[a._v("备注：可以结合路由懒加载的方式")]),a._v(" "),r("h2",{attrs:{id:"缓存"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[a._v("#")]),a._v(" 缓存")]),a._v(" "),r("h2",{attrs:{id:"分包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分包"}},[a._v("#")]),a._v(" 分包")]),a._v(" "),r("p",[a._v("使用splitchunks进行代码的拆分。")]),a._v(" "),r("p",[a._v("dllplugin，将不经常变化的框架打包到dll中")]),a._v(" "),r("p",[a._v("备注：也可以将不常变动的第三方库使用cdn的方式引入，写在script标签中，并且在webpack的配置文件中，配置external，webpack在打包的时候就不会打包进去")]),a._v(" "),r("h2",{attrs:{id:"vue项目部署优化之map文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue项目部署优化之map文件"}},[a._v("#")]),a._v(" vue项目部署优化之map文件")]),a._v(" "),r("h3",{attrs:{id:"dist中-大-文件-map"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dist中-大-文件-map"}},[a._v("#")]),a._v(" dist中“大”文件----map")]),a._v(" "),r("p",[a._v("为优化前的dist文件大小，将近40m，部署发布时间超过3分30秒。很多和js文件同名的map后缀文件，size都很大。")]),a._v(" "),r("h3",{attrs:{id:"map是个什么玩意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#map是个什么玩意"}},[a._v("#")]),a._v(" map是个什么玩意")]),a._v(" "),r("p",[a._v("source map文件是js文件压缩后，文件的变量名替换对应、变量所在位置等元信息数据文件，一般这种文件和min.js主文件放在同一个目录下。 比如压缩后原变量是map，压缩后通过变量替换规则可能会被替换成a，这时source map文件会记录下这个mapping的信息，这样的好处就是说，在调试的时候，如果有一些JS报错，那么浏览器会通过解析这个map文件来重新merge压缩后的js,使开发者可以用未压缩前的代码来调试，这样会给我们带来很大的方便！")]),a._v(" "),r("p",[a._v("而这种还原性调试功能，目前只有chorme才具有。")]),a._v(" "),r("p",[a._v("一句话，就是压缩的js与未压缩源文件js之间的映射关系文件。（就是一个桥梁）")]),a._v(" "),r("p",[a._v("so")]),a._v(" "),r("p",[a._v("这玩意就是辅助我调试用的，正式站其实作用不大，而且处于安全考虑，可以直接干掉。")]),a._v(" "),r("h3",{attrs:{id:"如何优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何优化"}},[a._v("#")]),a._v(" 如何优化")]),a._v(" "),r("p",[a._v("因为我是基于vue-cli3构建的项目，所以在vue.config.js文件中，添加productionSourceMap: false即可；之后直接编译 npm run  build 就可以看到效果")])])}),[],!1,null,null,null);t.default=v.exports}}]);