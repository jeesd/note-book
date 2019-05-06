(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{419:function(s,n,e){s.exports=e.p+"assets/img/markdown-img-paste-20180904095711718.00110909.png"},448:function(s,n,e){"use strict";e.r(n);var a=e(2),t=Object(a.a)({},function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"vuepress-构建自己的项目笔记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-构建自己的项目笔记","aria-hidden":"true"}},[s._v("#")]),s._v(" vuepress 构建自己的项目笔记")]),s._v(" "),a("p",[s._v("偶然发现一个 Markdown 文档生成的利器，也是 vue 官网推荐的一个工具 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"初体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初体验","aria-hidden":"true"}},[s._v("#")]),s._v(" 初体验")]),s._v(" "),a("p",[s._v("官网的 "),a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/getting-started.html#%E5%85%A8%E5%B1%80%E5%AE%89%E8%A3%85",target:"_blank",rel:"noopener noreferrer"}},[s._v("快速上手"),a("OutboundLink")],1),s._v("\n能教你怎么快速的看到一个主页面。这里总结下步骤")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建一个项目")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('创建目录：vuepress-demo\n并用 npm init 命令初始化一个 packagen.json 文件出来。初始值如下\n\n  {\n    "name": "vuepress-demo",\n    "version": "1.0.0",\n    "description": "vuepress 使用测试",\n    "main": "index.js",\n    "scripts": {\n      "test": "echo \\"Error: no test specified\\" && exit 1"\n    },\n    "author": "",\n    "license": "ISC"\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("其实这里都不是罪重要的。最重要的是添加 依赖和设置入口")])]),s._v(" "),a("li",[a("p",[s._v("添加依赖和设置入口")]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress-demo"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"version"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1.0.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"description"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress 使用测试"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:dev"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress dev docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"docs:build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vuepress build docs"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"devDependencies"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"vuepress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^0.14.2"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("并使用 "),a("code",[s._v("npm install")]),s._v(" 命令安装 vuepress 依赖")])]),s._v(" "),a("li",[a("p",[s._v("首页编写")]),s._v(" "),a("p",[s._v("随意写一点内容即可")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("目录结构如下：\n| - docs\n |- README.md\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("运行 "),a("code",[s._v("npm run docs:dev")])]),s._v(" "),a("p",[s._v("这个开发模式，有一个功能就是：会监控 docs 目录下的文档修改，会自动编译（可以想象成 vue 项目中的热更新）；\n但是一般是不需要编写边看生成的站点的，这个看个人爱好，我喜欢用 atom 编写，生成的时候才用 vuepress 来生成站点")])])]),s._v(" "),a("h2",{attrs:{id:"简单配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 简单配置")]),s._v(" "),a("p",[s._v("这些看官网文档即可，讲得很详细了，这里我想说一些注意事项：")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("首先只要是 docs 目录下的所有 md 文档都会被解析成 html ，这个可以在浏览器中直接输入地址查看效果")])]),s._v(" "),a("li",[a("p",[s._v("侧边栏的显示是需要在 config.js 中配置的。")])]),s._v(" "),a("li",[a("p",[s._v("侧边栏中配置的一个 title 相当于是一个根的侧边栏展示。")]),s._v(" "),a("p",[s._v("如下面贴出的配置，写了两个 title ，访问 http://localhost:8080/vue-press/ 的时候\n侧边栏展示的只是该 vue-press 配置中  children 的所有抓取到的标题。")])]),s._v(" "),a("li",[a("p",[s._v("主页文件中怎么使用图片？")]),s._v(" "),a("p",[a("code",[s._v("docs/.vuepress/public")]),s._v(" 把图片放在这个目录下，则可以直接使用 /xx.png 访问到")])]),s._v(" "),a("li",[a("p",[s._v("md 文件中引用图片注意事项")]),s._v(" "),a("ol",[a("li",[s._v("可以把图片放在 public 全局目录下")]),s._v(" "),a("li",[s._v("也可以把图片放在与 md 相同目录下，但是引用图片就的使用相对路径了，如 "),a("code",[s._v("./xxx,png")])])])])]),s._v(" "),a("p",[s._v("比如下面的侧边栏配置，主要配置是 docs/.vuepress/config.js 文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("module.exports = {\n    title: 'Hello VuePress',\n    description: 'Just playing around',\n    sidebar: 'auto',\n    themeConfig: {\n        docsDir: 'docs',\n        nav: [ // 配置顶部导航栏的条目\n            {text: 'Home', link: '/'},\n            {text: 'vue-press', link: '/vue-press/'},\n            {text: 'demeter', link: '/03_design_principles/demeter.md'},\n            {text: 'External', link: 'https://google.com'},\n        ],\n        sidebar: {\n            // 配置侧边栏\n            '/vue-press/': genSidebarVuePress(),\n            '/03_design_principles/':\n                genSidebarConfig(\"设计模式\")\n        }\n    }\n}\n\nfunction genSidebarVuePress() {\n    return [\n        {\n            title: 'vue-press',\n            collapsable: false,\n            children: [\n                ''\n            ]\n        }\n    ]\n}\n\nfunction genSidebarConfig(title) {\n    return [\n        {\n            title,\n            collapsable: true,\n            children: [\n                '',\n                // 注意这里，可以写md后缀，也可以不写，也能获取到\n                'composition_aggeregation',\n                'demeter',\n                'dependency_inversion.md',\n                'interface_segregation.md',\n                'liskov_substitution.md',\n                'open_close.md',\n                'single_responsibility.md',\n                '本章导航.md'\n            ]\n        }\n    ]\n}\n\n/*\n这个语法就需要自己吧所有路径拼写完整；上面的语法则不需要相当于有一个基础的路径\n[\n    {\n        title: '设计原则',\n        collapsable: false,\n        children: [\n            '',\n            // 这里的文档全路径其实就是 docs/03_design_principles\n            '/03_design_principles/composition_aggeregation.md',\n            '/03_design_principles/demeter',\n            '/03_design_principles/dependency_inversion.md',\n            '/03_design_principles/interface_segregation.md',\n            '/03_design_principles/liskov_substitution.md',\n            '/03_design_principles/open_close.md',\n            '/03_design_principles/single_responsibility.md',\n            '/03_design_principles/本章导航.md'\n        ]\n    }\n]*/\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br")])]),a("h3",{attrs:{id:"其他配置参考官网即可"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他配置参考官网即可","aria-hidden":"true"}},[s._v("#")]),s._v(" 其他配置参考官网即可")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress"),a("OutboundLink")],1),s._v(" 的文档也是使用 vuepress 编写的，")]),s._v(" "),a("p",[s._v("所以最好的学习方式就是查看他的源码，文档很少，但是配置中有使用 vue 组件的。已经很完善了")]),s._v(" "),a("blockquote",[a("p",[s._v("vuepress 项目地址： https://github.com/vuejs/vuepress/tree/master/docs")])]),s._v(" "),a("h2",{attrs:{id:"在-md-中使用-vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-md-中使用-vue","aria-hidden":"true"}},[s._v("#")]),s._v(" 在 md 中使用 vue")]),s._v(" "),a("blockquote",[a("p",[s._v("https://vuepress.vuejs.org/zh/guide/using-vue.html")])]),s._v(" "),a("p",[s._v("官网中有详细的介绍，这里简单说明下：")]),s._v(" "),a("p",[s._v("添加依赖")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' "vuepress-theme-vue": "~1.1.0"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("docs/.vuepress/components 目录下编写 vue 模板。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("如有一个 Demo-01.vue 的模板\n那么 在 md 文件中可以直接写 <Demo-01>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("注意：使用了 vue 的话，会在左上角生成一个广告位")]),s._v(" "),a("h2",{attrs:{id:"部署到-gh-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署到-gh-page","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署到 gh-page")]),s._v(" "),a("blockquote",[a("p",[s._v("官网文档： https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages")])]),s._v(" "),a("p",[s._v("这里粘贴下我这个项目的 deploy.sh 内容，比较简单，每一步都有中文说明，官网文档可以说是很良心了")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env sh")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 确保脚本抛出遇到的错误")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" -e\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 生成静态文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入生成的文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果是发布到自定义域名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo 'www.example.com' > CNAME")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" add -A\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'deploy'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:zq99299/note-book.git master:gh-pages\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cd")]),s._v(" -\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("p",[s._v("(windown 下)在 webstom 或则 gitBase 里面 可以直接运行 deploy.sh 文件。\n最好在 gitBase 里面运行，能显示错误信息。")]),s._v(" "),a("p",[s._v("还有一点需要注意的是：使用脚本必须在 gitHub 中添加你本机的 "),a("code",[s._v("id_rsa.pub")]),s._v("（里面的字符串） 公钥。")]),s._v(" "),a("p",[s._v("如下图所示：添加之后执行脚本才能推送到分支上去\n"),a("img",{attrs:{src:e(419),alt:""}})]),s._v(" "),a("p",[s._v("id_rsa.pub 的简易生成命令，更多的可以百度")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("// 一路回车即可，注意看控制台信息，有生成完成的文件路径\nssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"邮箱地址"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"可以作为基础项目的分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可以作为基础项目的分支","aria-hidden":"true"}},[s._v("#")]),s._v(" 可以作为基础项目的分支")]),s._v(" "),a("p",[s._v("这个分支可以直接克隆下来 ，稍微修改，就能使用起来了。快速建立新的笔记项目")]),s._v(" "),a("p",[s._v("建议认真看一遍官网文档，vuepress 不仅可以单独用来生成 markdown 的文档站点，还能在已有的 vue 项目中使用，")]),s._v(" "),a("p",[s._v("换句话说，一个后端系统的使用手册文档就可以使用 vuepress 来构建，这个主意是很不错的。")]),s._v(" "),a("ul",[a("li",[s._v("构建站点好看")]),s._v(" "),a("li",[s._v("默认主题配置方便")]),s._v(" "),a("li",[s._v("使用 atom 来编写，图片插件来弥补 markdown 中插入图片不方便的缺陷")]),s._v(" "),a("li",[s._v("脚本方便发布到 gh-page")]),s._v(" "),a("li",[s._v("可以写 vue 组件来构建自己特殊的需求，生成站点部署在自己的云主机上")])]),s._v(" "),a("p",[s._v("这个简直就是完美的搭配。")]),s._v(" "),a("blockquote",[a("p",[s._v("分支地址如下：")]),s._v(" "),a("p",[s._v("https://github.com/zq99299/note-book/tree/vuepress-demo")])])])},[],!1,null,null,null);n.default=t.exports}}]);