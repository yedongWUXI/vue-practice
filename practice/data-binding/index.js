/*

"Mustache语法"(双大括号)
里面能调用的是：
1.当前this绑定的data数据、方法
2.js里原生的全局对象 比如Date


* */

import Vue from 'vue'

new Vue({
  el: '#root',
  template: `
    <div
      :class="[{ active: isActive }]"
      :style="styles"
    >
      <p>{{getJoinedArr(arr)}}</p>
      <p>当前时间：{{Date.now()}}</p>
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    styles: {
      color: 'red',
      appearance: 'none'
    }
  },
  methods: {
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
