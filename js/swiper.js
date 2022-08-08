// 声明用于轮播图中改变样式的函数
function changeStyle(imgBox,left,pointArr,pointIndex){
  imgBox.style.left = left + 'px'
  pointArr.forEach((item) => {
    item.style.backgroundColor = '#b2b2b2'
  })
  pointArr[pointIndex].style.backgroundColor = '#ff6900'
}

// 声明一个轮播图区域的函数
function swiper(selector,intervalId){
  /*图片滚动数据*/
  let imgBox = document.querySelector(selector+' .swiper-box')
  let width = imgBox.clientWidth
  let totalWidth = width * imgBox.children.length
  let left = 0
  /*分页器滚动数据*/
  let swiperPoint = document.querySelector(selector+' .swiper-pagination')
  // 将伪数组转为真数组，便于遍历
  let pointArr = new Array(...swiperPoint.children)
  let pointIndex = 0

  // 声明定时器回调函数
  function running(){
    left -= width
    pointIndex += 1
    if (-left >= totalWidth) {
      left = 0
      pointIndex = 0
    }
    // 调用changeStyle函数改变当前样式
    changeStyle(imgBox,left,pointArr,pointIndex)
  }

  // 用传入的字符串参数作为变量名，并将定时器标识赋值给它，用于后续清除指定定时器
  intervalId = setInterval(running, 5000)

  // 为分页器的每一块绑定点击事件
  pointArr.forEach((item,index)=>{
    item.onclick = ()=>{
      // 停止上一个定时器
      clearInterval(intervalId)

      // 改变当前样式
      left = -width * index
      pointIndex = index
      changeStyle(imgBox,left,pointArr,pointIndex)

      // 重新开启定时器
      intervalId = setInterval(running,5000)
    }
  })

  // 为左右按钮搬到点击事件
  let leftBtn = document.querySelector(selector+' .i-btn-left')
  let rightBtn = document.querySelector(selector+' .i-btn-right')
  /// 左按钮
  leftBtn.onclick = () => {
    // 停止上一个定时器
    clearInterval(intervalId)

    // 改变当前样式
    left += width
    if (left >= width){
      left = -width * (pointArr.length-1)
    }
    pointIndex -= 1
    if (pointIndex <= -1){
      pointIndex = pointArr.length-1
    }
    changeStyle(imgBox,left,pointArr,pointIndex)

    // 重新开启定时器
    intervalId = setInterval(running,5000)
  }

  // 右按钮
  rightBtn.onclick = () => {
    clearInterval(intervalId)

    left -= width
    if (-left >= totalWidth){
      left = 0
    }
    pointIndex += 1
    if (pointIndex >= pointArr.length){
      pointIndex = 0
    }
    changeStyle(imgBox,left,pointArr,pointIndex)

    intervalId = setInterval(running,5000)
  }

}

swiper('.content-second','intId1')
swiper('.content-fifth','intId2')
