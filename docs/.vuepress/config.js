const fs = require('fs')
const files = fs.readdirSync('docs/news/')
const sidebars = files.reduce((total,cur)=>{
  if(cur!=='README.md'){
    total.push(cur.replace('.md',''))
  }
  return total
},[''])

module.exports = {
  title: 'vuepress',
  description: 'vuepress开发模版',
  head: [
    ['link', { rel: 'icon', href: '/igroot_logo.png' }]
  ],
  port: 2019,
  themeConfig: {
    displayAllHeaders: true,
    repo: '',
    repoLabel: '贡献代码',
    editLinks: true,
    editLinkText: '帮助我们改进页面内容',
    lastUpdated: '上次更新',
    nav: [
      { 
        text: '主页', 
        link: '/' 
      }, {
        text: '资讯',
        link: '/news/'
      }
    ],
    sidebar: {
      "/news/": sidebars
    },
  }
}