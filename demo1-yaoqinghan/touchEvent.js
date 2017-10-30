
//元素滑动事件绑定,基于jquery
//事件处理函数中的this都指向$element
function bindTouchEvent ($element, slideUpHandler, slideDownHandler) {
    let startY      //开始坐标
    let moveY       //手指一动距离

    function touchStart ($event) {
        //记录触碰开始坐标
        startY = $event.originalEvent.touches[0].pageY
        moveY = 0
    }

    function touchEnd ($event) {
        moveY = $event.originalEvent.changedTouches[0].pageY - startY
        //move大于50为下滑,执行下滑处理函数
        if (moveY > 50) {
            slideDownHandler && slideDownHandler.call($element, $event)
        }
        //move小于-50为上滑,执行上滑处理函数
        if (moveY < -50) {
            slideUpHandler && slideUpHandler.call($element, $event)
        }
    }

    $element.on('touchstart', function ($event) {
        touchStart($event)
    })
    $element.on('touchend', function ($event) {
        touchEnd($event)
    })
}

export default bindTouchEvent