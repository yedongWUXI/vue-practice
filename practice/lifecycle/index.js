/*
自翻译：
render: 渲染

mounted: 挂载



生命周期	  是否获取dom节点	  是否可以获取data	是否获取methods
beforeCreate	  否	                否	              否
created	          否	                是	              是
beforeMount	      否	                是	              是
mounted	          是	                是	              是

vue生命周期实际上和浏览器渲染过程是挂钩的。

在beforeCreate阶段，对浏览器来说，整个渲染流程尚未开始或者说准备开始，对vue来说，实例尚未被初始化，data observer和 event/watcher也还未被调用，在此阶段，对data、methods或文档节点的调用现在无法得到正确的数据。

在created阶段，对浏览器来说，渲染整个HTML文档时,dom节点、css规则树与js文件被解析后，但是没有进入被浏览器render过程，上述资源是尚未挂载在页面上，也就是在vue生命周期中对应的created
阶段，实例已经被初始化，但是还没有挂载至$el上，所以我们无法获取到对应的节点，但是此时我们是可以获取到vue中data与methods中的数据的

在beforeMount阶段，实际上与created阶段类似，节点尚未挂载，但是依旧可以获取到data与methods中的数据。

在mounted阶段，对浏览器来说，已经完成了dom与css规则树的render，并完成对render tree进行了布局，而浏览器收到这一指令，调用渲染器的paint（）在屏幕上显示，而对于vue来说，在mounted阶段，vue的template成功挂载在$el中，此时一个完整的页面已经能够显示在浏览器中，所以在这个阶段，即可以调用节点了



* */

import Vue from 'vue'

const app = new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log(this, 'beforeCreate')
  },
  created () {
    console.log(this, 'created')
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount')
  },
  //如果上面没有指定 挂载地点el:'#root',下面的就不会执行。mounted是把生成的html挂载到根目录上
  mounted () {
    console.log(this.$el, 'mounted')
  },
  //beforeUpdate 和 updated是在有数据更新的情况下 才会被调用
  beforeUpdate () {
    console.log(this, 'beforeUpdate')
  },
  updated () {
    console.log(this, 'updated')
  },
  activated () { // 在组件章节讲解
    console.log(this, 'activated')
  },
  deactivated () { // 在组件章节讲解
    console.log(this, 'deactivated')
  },
  beforeDestroy () {
    console.log(this, 'beforeDestroy')
  },
  destroyed () {
    console.log(this, 'destroyed')
  }
})


//测试beforeUpdate和updated
// setInterval(() => {
//   app.text = app.text + 1
// }, 1000)
