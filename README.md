https://zhuanlan.zhihu.com/p/105485334
vue版本分vue.runtime(A版本)和不带runtime的(B版本)
B版本有编译器，占用代码体积大，比A版本大40%的体积。使用该版本，可直接将内容写在HTML中查看视图效果，或用template 渲染到 HTML，用webpack引入，需要配置alias

A版本无编译器，占用代码体积小，但无法直接实现页面渲染，需要利用 render 里的 h 函数来创建 HTML 节点

















