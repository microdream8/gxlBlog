(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{173:function(s,a,t){"use strict";t.r(a);var e=t(0),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mac系统下js全栈环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac系统下js全栈环境配置"}},[s._v("#")]),s._v(" Mac系统下JS全栈环境配置")]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("俗话说，工欲善其事，必先利其器。所以，想从事js 全栈开发的朋友们，强烈\b建议大家买一台苹果笔记笔记本电脑，全新的Mac便宜的\b\b六千多就\b有了，二手三千多的也\b能满足要求了。\b因为Mac电脑不仅美观，满足日常办公和娱乐，而且对软件开发支持的很好，而且和Linux服务器环境也很像，\b\b需要Windows系统也可以通过虚拟机\b使用。")]),s._v(" "),t("p",[s._v("自从我使用过Mac进行软件开发后，我就再也不用Windows了，开发体验和效率都不错，如果上班的公司不提供Mac，我就用自己的。同时，我每去一个团队，都会尽量争取整个团队都使用Mac，甚至招人时也\b可会把是否熟练使用Mac进行开发作为重要考虑因素之一！")]),s._v(" "),t("p",[s._v("在此分享一下自己这几年使用Mac系统进行软件开发搭建环境的一些心得和建议吧。")]),s._v(" "),t("h2",{attrs:{id:"配置终端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置终端"}},[s._v("#")]),s._v(" 配置终端")]),s._v(" "),t("p",[s._v("Terminal程序一般我都会放在快捷入口，然后把shell改为oh~my-zsh, 因为shell的类型有很多种，Mac默认的bash的功能虽然已经很强大，但提示功能不够强大，界面也不够炫。而zsh的功能极其强大，只是配置过于复杂，起初只有极客才在用。后来，有个穷极无聊的程序员创建了一个名为oh-my-zsh的开源项目...")]),s._v(" "),t("p",[s._v("从此，只需简单的安装配置，小白们就可以用上狂拽炫酷吊炸天的zsh,配置过程如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("查看系统是否安装了zsh:\n  cat /etc/shells \nMac默认有，没有\b\b则安装：\n  brew install zsh\n查看当前系统的shell:\n  echo $SHELL\n不是zsh，则切换\n  chsh -s /bin/zsh\n安装oh my zsh:\n  wget https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh -O - | sh\n配置文件\n  cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\n")])])]),t("p",[s._v("然后把常用的Linux命令写到 .zshrc文件中：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vi ~/.zshrc\nsource ~/.zshrc\n")])])]),t("p",[s._v("建议大家把一些常用的命令写到.zshrc中：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('vi ~/.zshrc\nsource ~/.zshrc\n常用的命令：\nalias vb="vi ~/.zshrc"\nalias sb="source ~/.zshrc\nalias ns="npm start"\nalias nl="npm run lint"\nalias nb="npm run build"\nalias np="npm run deploy"\nalias gcz="git cz"\nalias ga="git add ."\nalias gs="git status"\nalias gp="git push"\nalias gl="git pull"\nalias gc="git clone"\nalias gcd="git checkout dev"\nalias gcm="git checkout master"\nalias ni="npm install"\n')])])]),t("h2",{attrs:{id:"安装node和npm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装node和npm"}},[s._v("#")]),s._v(" 安装node和npm")]),s._v(" "),t("p",[s._v("最简单的就是使用braw install node, 但作为一个专业的js \b码农，建议大家先安装nvm这个node版本管理工具, 维护多个版本的node将会是一件非常麻烦的事情，而nvm就是为解决这个问题而产生的：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("  sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash\n")])])]),t("p",[s._v("常用命令")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("nvm ls-remote // 查看node有哪些版本可以安装\nnvm ls // \b查看本地 所有安装的版本\nnvm install node // 安装最新版 Node.js\nnvm install --lts // 安装最新稳定版\nnvm install v10.10.0 // 安装 node 10.10.0\nnvm use v9.6.2 // 切换到node 9.6.2\n")])])]),t("p",[s._v("一般安装node的时候\b,就会同时安装npm了，大家可以根据需要安装崭新的经过重新设计的npm客户端yarn。")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo npm install -g yarn\n")])])]),t("h2",{attrs:{id:"安装编辑器vscode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装编辑器vscode"}},[s._v("#")]),s._v(" 安装编辑器vscode")]),s._v(" "),t("p",[s._v("作为一个操作系统出生的js全栈工程师，我使用多的编辑器有很多，webstorm，sublime，atom以及\bvscode等，都不错，用习惯了都差不多，但是个人体验过之后，从稳定性和效率来看，对于js 全栈开发，还是推荐使用vscode。")]),s._v(" "),t("p",[s._v("相比atom经常因为插件而崩掉，vscode虽然是微软近几年才\b打造的轻量编辑器，目前来看插件质量还是不错的，\b且支持node后端调试，和Markdown预览，不用\b配置太多就能使用得顺心。")]),s._v(" "),t("p",[s._v("下载官网：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://code.visualstudio.com/\n")])])]),t("p",[s._v("安装好后，根据自己的需要添加\b一下常用的插件：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Auto Close Tag\nAuto Rename Tag\nBracket Pair Colorizer\nColor Highlight\nHTML Snippets\nHTML CSS Support\nHTMLHint\nfile-icons\nJavaScript (ES6) code snippets\nMaterial Icon Theme\nGitLens \neslint\nvueur\nVue 2 Snippets\nVue Peek\nVueHelper\nNode modules resolve\n")])])]),t("h2",{attrs:{id:"安装mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装mysql")]),s._v(" "),t("p",[s._v("作为全栈开发，必须得和数据库打交道，这里只\b分享MySQL在Mac的两种方式安装方式, 5.7后的大版本直接跳到了8.0了，建议大家先使用5.7，且5.7后为了安全，首次安装会默认生成一个特别复杂的密码，需要在\b安装时记下或截图：")]),s._v(" "),t("p",[s._v("通过brew安装：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("brew install mysql // 安装最新8.0以后的版本\nbrew install mysql@5.7 \n")])])]),t("p",[s._v("通过官网下载安装包：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://www.mysql.com/downloads/\n选择最下面的MySQL Community Downloads\n然后下载 MySQL Community Server\n")])])]),t("p",[s._v("安装成功后 一般服务启动的设置，在Mac的系统\b设置的最下\b面。然后通过以下命令验证是否安装成功和服务使用正常：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mysql -u root -p\n")])])]),t("p",[s._v("而其他软件的安装，比如react-native 或者 weex等，根据官网提示操作即可。")])])}),[],!1,null,null,null);a.default=n.exports}}]);