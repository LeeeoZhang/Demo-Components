

let $imagesCarousel = $('#carousel');
let $images = $('#carousel>li')
let imagesNum = $images.length          //图片数量
let imageSize = $images.width()
let $navs = $('#nav>li')
let index = 0
let canClick = true

let $preButton = $('.button-pre')
let $nextButton = $('.button-next')
console.log($preButton)


//首尾图片插入
$images.first().clone().appendTo($imagesCarousel)
$images.last().clone().prependTo($imagesCarousel)

$imagesCarousel.css({left: -imageSize})

//上一页事件
$preButton.on('click',function(e) {
    if(!canClick){
        return
    }
    canClick = false
    e.preventDefault()
    pre()
})


//下一页事件
$nextButton.on('click',function(e) {
    if(!canClick) {
        return
    }
    canClick =false
    e.preventDefault()
    next()
})


//nav事件
$navs.on('click',function(e) {
    if(!canClick) {
        return
    }
    canClick = false
    e.preventDefault()
    let page = $(this).index()
    $imagesCarousel.animate({left: -imageSize*(page + 1)},1000,function() {
        canClick = true
        setNav(page)
    })

})


//上一页事件处理
function pre() {
    $imagesCarousel.animate({left: "+=" + imageSize},1000,function() {
        canClick = true
        index--
        if(index < 0) {
            $imagesCarousel.css({left: -imageSize*imagesNum})
            index = imagesNum - 1
        }
        setNav(index)
    })
}


//下一页事件处理
function next() {
    $imagesCarousel.animate({left: "-=" + imageSize},1000,function() {
        canClick = true
        index++
        if(index === imagesNum) {
            $imagesCarousel.css({left: -imageSize})
            index = 0
        }
        setNav(index)
    })
}

//导航条设置
function setNav(index) {
    $navs.eq(index).toggleClass('active')
    $navs.eq(index).siblings().removeClass('active')
}