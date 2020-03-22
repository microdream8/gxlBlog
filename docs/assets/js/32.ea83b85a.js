(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{252:function(e,v,_){"use strict";_.r(v);var a=_(28),t=Object(a.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h1",{attrs:{id:"web应用性能优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web应用性能优化"}},[e._v("#")]),e._v(" web应用性能优化")]),e._v(" "),_("p",[e._v("web应用性能的优化是每一个有追求的web开发者永恒的话题，对于老司机，一般在系统架构时就会充分考虑性能的问题，而多数应用，都是先快速实现功能，到特定阶段专门抽出时间来进行性能优化。")]),e._v(" "),_("p",[e._v("当前，我们的多数web应用都比较稳定了，在业务迭代不紧张时，正是进行技术迭代的好时机，本文将持续总结web应用性能优化的常见方法及原理，便于大家持续对我们的web应用进行优化！")]),e._v(" "),_("h2",{attrs:{id:"优化目的"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化目的"}},[e._v("#")]),e._v(" 优化目的")]),e._v(" "),_("p",[e._v("通过优化，让web页面加载的更快，对用户操作响应更及时，以为用户带来更好的用户体验！")]),e._v(" "),_("p",[e._v("同时，只有通过性能优化，才能有效的提升我们技术团队的硬实力，才能让我们从重复的业务研发中寻找刺激点，为工作增加乐趣！")]),e._v(" "),_("h2",{attrs:{id:"优化方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#优化方法"}},[e._v("#")]),e._v(" 优化方法")]),e._v(" "),_("p",[e._v("对于web应用，仅仅从提升首屏渲染速度和首次可交互时间来看，可以从以下六个方面着手：")]),e._v(" "),_("ul",[_("li",[e._v("减少文件大小：开启打包压缩，去掉冗余代码，进行合理文件拆分，避免单个文件过大等；")]),e._v(" "),_("li",[e._v("减少请求数量：进行适当的文件合并，尽量避免使用重定向，如果一定要使用重定向，如http重定向到https，要使用301永久重定向，将图片的内容以Base64格式内嵌到HTML中和使用字体图标来代替图片等；")]),e._v(" "),_("li",[e._v("优化网络连接：使用CDN，使用DNS预解析，使用多个域名并行连接（在HTTP1.1协议下，chrome每个域名的最大并发数是6个），在HTTP2协议中，可以开启管道化连接；")]),e._v(" "),_("li",[e._v("优化资源加载：JS文件放在body底部和CSS文件放在head中，先外链，后本页，异步script标签和模块按需加载，使用资源懒加载、资源预加载preload和资源预读取prefetch；")]),e._v(" "),_("li",[e._v("减少重绘回流：避免使用层级较深的选择器和CSS表达式，给图片设置尺寸，素适当地定义高度或最小高度，缓存DOM，防抖和节流，及时清理环境，特别是定时器和全局变量；")]),e._v(" "),_("li",[e._v("用好打包工具：选择性能更好的打包工具，及时更新打包工具，选用合适的插件拓展功能，合适的loader解析文件；")])]),e._v(" "),_("h3",{attrs:{id:"减少文件大小"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#减少文件大小"}},[e._v("#")]),e._v(" 减少文件大小")]),e._v(" "),_("p",[e._v("多年的优化实践表明，文件大小是影响页面加载速度的首要因素，也是开发者最能通过优化可以改进的方面。")]),e._v(" "),_("p",[e._v("现代的web应用，基本上都是基于webpack开发，即使是一些前后端不分离的项目，也可以引入webpack进行文件的合并和打包压缩。")]),e._v(" "),_("p",[e._v("对于webpack 目前使用最多的是uglifyjs-webpack-plugin来对js进行压缩，但是官方推荐的是terser-webpack-plugin，两者压缩后文件大小差不多，uglifyjs早期版本有ES6语法兼容问题，而terser经测试打包特别慢，特别是在服务器上，因此我们所有项目都选择uglifyjs这个插件。")]),e._v(" "),_("p",[e._v("uglifyJs或terser Plugin都会拖慢webpack的编译速度，所有建议在开发简单将其关闭，部署的时候再将其打开。")]),e._v(" "),_("p",[e._v("而很多项目也会用到compression-webpack-plugin，它和上面有什么区别呢？最大的区别是使用compression主要是在前面插件的基础上通过选择适当的文件格式进行压缩，比如gzip，所以需要服务器进行相应配置，且浏览器必须得支持解析该格式。")]),e._v(" "),_("p",[e._v("以上是工具的作用，减少文件的另一重要的因素，就是合理使用第三方库，尽量避免因使用某一个很大的库中的某一个方法而把整个三方库打包进来，很多组件库都支持按需引用，还有一些工具库支持按模块导入，比如loadash，可以通过lodash.debounce只导入debounce。")]),e._v(" "),_("p",[e._v("还有就是对于研发人员本身的内功，好的程序员都会注重代码之美，几乎没有冗余代码，在兼顾可读性和维护性的基础上，能一行实现的代码就不会用两行实现。")]),e._v(" "),_("p",[e._v("而对于多图片的应用，图片的格式选择和压缩处理也很重要，这个我们会单独起一篇博客讨论！")]),e._v(" "),_("h3",{attrs:{id:"用好打包工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#用好打包工具"}},[e._v("#")]),e._v(" 用好打包工具")]),e._v(" "),_("p",[e._v("选择合适的打包工具很重要，虽然目前主流的打包工具是webpack和rollup, 但是也有其他一些不错的打包工具，如全新打包工具Parcel，")]),e._v(" "),_("p",[e._v("Webpack 始于2012年，由 Tobias Koppers发起，用于解决当时现有工具未解决的的一个难题：构建复杂的单页应用程序(SPA)。")]),e._v(" "),_("p",[e._v("Rollup 则是由于不同的原因被创建的：利用 ES2015 巧妙的模块设计，尽可能高效地构建出能够直接被其它 JavaScript 库引用的模块。")]),e._v(" "),_("p",[e._v("一般，对于应用使用 webpack，对于类库使用 Rollup。")]),e._v(" "),_("p",[e._v("对我们来讲，更多的要求是用好webpack，了解版本特性的差异，以及掌握其核心原理，选好版本，调好配置。")]),e._v(" "),_("p",[e._v("比如，当下我们可以基于webpack4统一前端项目构建和优化，因为webpack4目前是最新稳定版本，各种插件支持得最好，同时性能也有保证，虽然据说webpack5在减少文件体积上有巨大飞跃，但正式版还未发布，对新组建的团队来讲，精力有限！")]),e._v(" "),_("h2",{attrs:{id:"注意事项"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[e._v("#")]),e._v(" 注意事项")]),e._v(" "),_("p",[e._v("性能优化很重要，但也有很多需要注意的地方，把握不好，反而达不到预期，甚至影响大局。结合我个人的经验，主要由以下需要注意的：")]),e._v(" "),_("ul",[_("li",[e._v("在做任何优化之前，都要做充分的调研和技术验证，然后和有关人员进行必要的沟通；")]),e._v(" "),_("li",[e._v("尽量将优化与业务迭代剥离开，在此基础上还要把优化进一步区分为性能优化和代码重构，一般性能优化涉及面少，测试容易验证，有时可以课需求迭代一起上线，而代码重构则一定要和性能优化和需求代码分离开，拉新分支，单独排期；")]),e._v(" "),_("li",[e._v("性能优化是一项长期工程，不要一次做太多优化，否则不利于回滚，容易让优化夭折；")]),e._v(" "),_("li",[e._v("在优化的过程中，对于版本升级一定要慎重，在调研中，要充分考虑到兼容性，不仅要看官方更新日志，更要看官方仓库中查看issues。")])])])}),[],!1,null,null,null);v.default=t.exports}}]);