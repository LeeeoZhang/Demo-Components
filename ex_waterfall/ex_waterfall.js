let $container = $('#waterfall')
let $items = $('#waterfall>div')


function waterFall() {
    let containerWidth = $container.width()
    let itemWidth = $items.outerWidth(true)
    let columnNum = parseInt(containerWidth/itemWidth)  //确定列数
    let columnsHeight = []  //记录每列高度

    for(let i=0; i<columnNum;i++) {
        columnsHeight[i] = 0
    }

    $items.each(function(index,item) {
        let minColumn = Math.min.apply(null,columnsHeight)      //找出高度最小的一列
        let minColumnIndex = columnsHeight.indexOf(minColumn)   //高度最小一列的index

        //放到高度最小那一列
        $(item).css({
            left: minColumnIndex*itemWidth,
            top: minColumn
        })

        //记录放置之后此列高度
        columnsHeight[minColumnIndex] += $(item).outerHeight(true)

        //容器高度应为最高列高度
        $container.css({
            height: Math.max.apply(null,columnsHeight)
        })
    })
}


waterFall()

//窗口高度发生变化时，重新排列
$(window).resize(function() {
    waterFall()
})