let $waterFallCt = $('#still .post')
let columnsHeight = [0,0,0]
let length = 3
let postNum = 1
let $loadButtom = $('#still .load')

function waterFall(node) {
    let $node = node
    let itemWidth = $node.outerWidth(true)
    let minColumn = Math.min.apply(null,columnsHeight)
    let minColumnIndex = columnsHeight.indexOf(minColumn)
    $node.css({
        left: minColumnIndex*itemWidth,
        top: minColumn
    })
    columnsHeight[minColumnIndex] += $node.outerHeight(true)
    $waterFallCt.css({
        height: Math.max.apply(null,columnsHeight)
    })
}


function makeNode() {
    let urlArray = makeDate()
    urlArray.forEach(function(item,index) {
        let img = new Image()
        img.onload = function() {
            let node = $(`<div>
                            <a target="_blank" href=${item.post}>` + img.outerHTML +
                                `<div class="iconCt">
                                    <svg class="icon" aria-hidden="true">
                                        <use xlink:href="#icon-fangda"></use>
                                    </svg>
                                </div>
                            </a>
                        </div>`)
            $waterFallCt.append(node)
            waterFall(node)
        }
        img.src = item.minPost
    })
}


function makeDate() {
    let urlArray =[]
    for(let i = 0; i<length; i++) {
        urlArray.push({
            post: `images/post/pic${postNum}.jpg`,
            minPost: `images/post/min/min_pic${postNum}.png`
        })
        postNum++
    }
    return urlArray
}
makeNode()
$loadButtom.on('click',function() {
    if(postNum > 30) {
        $loadButtom.text("No More")
        $loadButtom.attr('disabled','true')
        return
    }
    makeNode()
})



