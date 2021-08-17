const express = require('express')
const Vue = require('vue')

const app = express()

const renderer = require('vue-server-renderer').createRenderer()

const page = new Vue({
  data:function() {
    return {
        title:'tian zhu ling'
      };
  },
  template: `<div>{{title}}Hello World</div>`
})

app.get('/index.html',(req, res)=>{
  // req.originalUrl 可获取请求路径及参数
  // 将 Vue 实例渲染为 HTML
  renderer.renderToString(page, (err, html) => {
    if (err) throw err
    console.log(html)
    res.send(html)
    // => <div data-server-rendered="true">Hello World</div>
  })
})

app.listen(3000,()=>{
  console.log('启动成功');  
})