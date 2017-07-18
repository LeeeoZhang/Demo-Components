let $container = $('#waterfall')
let $items = $('#waterfall>div')


function waterFall() {
    let containerWidth = $container.width()
    let itemWidth = $items.outerWidth(true)
    let columnNum = parseInt(containerWidth/itemWidth)
    let columnsHeight = []

    for(let i=0; i<columnNum;i++) {
        columnsHeight[i] = 0
    }

    $items.each(function(index,item) {
        let minColumn = Math.min.apply(null,columnsHeight)
        let minColumnIndex = columnsHeight.indexOf(minColumn)
        $(item).css({
            left: minColumnIndex*itemWidth,
            top: minColumn
        })
        columnsHeight[minColumnIndex] += $(item).outerHeight(true)
        $container.css({
            height: Math.max.apply(null,columnsHeight)
        })
    })
}


waterFall()
$(window).resize(function() {
    waterFall()
})