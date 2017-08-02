let $waterFallCt = $('#still .post')
let $items = $waterFallCt.children('div')
let itemWidth = $items.outerWidth(true)
let columnsHeight = [0,0,0]

$items.each(function(index,item) {
    console.log(columnsHeight)
    let minColumn = Math.min.apply(null,columnsHeight)
    let minColumnIndex = columnsHeight.indexOf(minColumn)
    $(item).css({
        left: minColumnIndex*itemWidth,
        top: minColumn
    })
    columnsHeight[minColumnIndex] += $(item).outerHeight(true)
    $waterFallCt.css({
        height: Math.max.apply(null,columnsHeight)
    })
})
