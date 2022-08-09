### content
    ①用一个大的div包裹几个小的div，大div设置flex布局，
        align-items: center; flex-flow: column; 
        让所有子元素纵向排列 ，居中对齐
        设置宽度，由子元素撑起高度
    ②子元素小div设置宽度为100%的父元素宽度，设计到轮播图的样式，可以将多张图片放入一个div，
        使用flex布局将它们横向排列，然后默认靠左边排列，接着设置图片宽度高度撑起div，
        最外层div  overflow: hidden;
    
### footer
    主要也是运用到flex布局


### 头部导航栏背景透明度变化
    ① document.elementHtml属性 能够获取到 html元素 ，其 scrollTop属性 就是浏览器滚动条距离顶部的距离
    ② 为body元素绑定onscroll事件，即在浏览器滚动条滚动时触发该事件（document.body 获取body元素）
    ③ 事件回调中通过判断当前 html元素的scrollTop属性来改变头部背景透明度
    ④ 为body的 onload事件 绑定相同的事件回调

### 回到顶部按钮
    ① 运用固定定位
    ② 为其绑定点击事件，事件中通过开启定时器，每隔一小段时间减小 html元素的scrollTop属性 来实现滚动的效果
        如果减小到负数时可以将其变为 0 ，然后记得清除定时器
