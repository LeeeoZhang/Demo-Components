let dom = {
    on: function (element, eventType, selector, handle) {
        element.addEventListener(eventType, (event) => {
            let targetElement = event.target
            while (!targetElement.matches(selector)) {          //Element.matches(selector)如果元素被选择器选中,返回true
                if (element === targetElement) {
                    targetElement = null
                    break                                       //事件代理的模式，直到点中selector的元素才发生事件
                }
                targetElement = targetElement.parentNode
            }
            targetElement && handle.call(targetElement, event, targetElement)
        })
        return element
    },
    index: function (element) {
        let siblings = element.parentNode.children              //获取所有子元素
        for (index = 0; index < siblings.length; index++) {     //判断在哪个位置上，返回相应index
            if (element === siblings[index]) {
                return index
            }
        }
        return -1                                               //没有返回-1
    },


    getPosition: function (element, touchStarHandler, touchMoveHandler, touchEndHandler) {
        let isTouch = ('ontouched' in document)
        let touchstart, touchmove, touchend

        //判断是否在移动环境,确定事件
        if (isTouch) {
            touchstart = 'touchstart'
            touchend = 'touched'
            touchmove = 'touchmove'
        } else {
            touchstart = 'mousedown'
            touchend = 'mouseup'
            touchmove = 'mousemove'
        }

        function getPoint (event) {
            let event = event || window.event                      //兼容IE
            let toucheEvent = isTouch ? event.changedTouches[0] : event
            let x = toucheEvent.pageX || (toucheEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft)
            x -= element.offsetLeft
            let y = toucheEvent.pageY || (toucheEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop)
            y -= element.offsetTop
            return {x, y}
        }

        element.addEventListener(touchstart, function (event) {
            event.point = getPoint(event)
            touchStarHandler && touchStarHandler.call(this, event)
        })
        element.addEventListener(touchend, function (event) {
            event.point = getPoint(event)
            touchEndHandler && touchEndHandler.call(this, event)
        })
        element.addEventListener(touchmove, function (event) {
            event.point = getPoint(event)
            touchMoveHandler && touchMoveHandler.call(this, event)
        })

    },


    //获取鼠标相对于element的位置
    getMousePosition: function (element, mouseDownHandler, mouseMoveHandler, mouseUpHandler) {
        function getPoint (event) {
            let event = event || window.event
            let x = event.pageX || (event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft)
            x -= element.offsetLeft
            let y = event.pageY || (event.clientY + document.body.scrollTop + document.documentElement.scrollTop)
            y -= element.offsetTop
            return {x, y}
        }

        if (!element) return

        //handler会接收到一个event,xy坐标记录在event.point(自定义)里
        //x = event.point.x ; y = event.point.y
        element.addEventListener('mousedown', function (event) {
            event.point = getPoint(event)
            mouseDownHandler && mouseDownHandler.call(this, event)
        })
        element.addEventListener('mousemove', function (event) {
            event.point = getPoint(event)
            mouseMoveHandler && mouseMoveHandler.call(this, event)
        })
        element.addEventListener('mouseup', function (event) {
            event.point = getPoint(event)
            mouseUpHandler && mouseUpHandler.call(this, event)
        })
    },

    getTouchPosition: function (element, touchStarHandler, touchMoveHandler, touchEndHandler) {
        function getPoint (event) {
            let event = event || window.event
            let touchEvent = event.changedTouches[0]
            let x = touchEvent.pageX || (touchEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft)
            x -= element.offsetLeft
            let y = touchEvent.pageY || (touchEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop)
            y -= element.offsetTop
            return {x, y}
        }

        element.addEventListener('touchstart', function (event) {
            event.point = getPoint(event)
            touchStarHandler && touchStarHandler.call(this, event)
        })
        element.addEventListener('touchmove', function (event) {
            event.point = getPoint(event)
            touchMoveHandler && touchMoveHandler.call(this, event)
        })
        element.addEventListener('touchend', function (event) {
            event.point = getPoint(event)
            touchEndHandler && touchEndHandler.call(this, event)
        })
    }
}