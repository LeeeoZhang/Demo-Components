


let $container = $('#waterfall')
let $load = $('#load')
let num = 8
let page = 0
let columnHeights = [0,0,0]
let canScroll = true

//获取数据
function getDate(callback) {
    if(!canScroll) return
    canScroll = false       //上锁，防止获取重复数据
    let url =  `http://platform.sina.com.cn/slide/album_tech?app_key=1271687855&num=${num}&page=${page}`
    $.ajax({
        url: url,
        method: 'get',
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done((response) => {
        callback(response.data)    //获取数据成功执行回调函数
    }).fail(() => {
        alert('获取新闻出错')
    })
}


//处理数据
function dealDate(data) {
    data.forEach((item,index) => {
        let $node = makeNode(item)
        $node.find('img').on('load',function() {   //当图片加载完毕才把节点放入页面，这样才能获取元素高度
            $container.append($node)
            waterFall($node)
            page++                      //完成一页数据后，获取下一页
            canScroll = true            //解锁
        })
        $node.find('img').attr('src',item.img_url)   //设置回调函数在src赋值前，保证回调函数可以执行
    })
}


//拼接节点
function makeNode(nodeDate) {
    let $div = $('<div class="new"></div>')
    let $a = $(`<a href=${nodeDate.url}></a>`)
    $(`<img  alt="">`).appendTo($a)
    $(`<h4>${nodeDate.short_name}</h4>`).appendTo($a)
    $(`<p>${nodeDate.short_intro}</p>`).appendTo($a)
    $div.append($a)
    return $div
}

//瀑布流逻辑
function waterFall($node) {
    let nodeHeight = $node.outerHeight(true)
    let nodeWidth = $node.outerWidth(true)
    let minColumHeight = Math.min.apply(null,columnHeights)
    let minColumnHeightIndex = columnHeights.indexOf(minColumHeight)
    $node.css({
        left: minColumnHeightIndex*nodeWidth,
        top: minColumHeight
    })
    columnHeights[minColumnHeightIndex] += nodeHeight
    $container.css({
        height: Math.max.apply(null,columnHeights)
    })
}

//隐藏节点是否出现在视野
function isLoad() {
    return ($(window).scrollTop() + $(window).height()) + 200 > $load.offset().top
}


getDate(dealDate)

//滚动加载新闻
$(window).on('scroll',() => {
    if(isLoad()) {
        getDate(dealDate)
    }
})



