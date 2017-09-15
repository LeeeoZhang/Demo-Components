let dom = {
    on: function (element, eventType, selector, handle) {
        element.addEventListener(eventType, (event) => {
            let targetElement = event.target
            while (!targetElement.matches(selector)) {
                if (element === targetElement) {
                    targetElement = null
                    break                                       //事件代理的模式，直到点中selector的元素才发生事件
                }
                targetElement = targetElement.parentNode
            }
            targetElement && handle.call(targetElement, e, targetElement)
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
    }
}