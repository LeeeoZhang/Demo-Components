window.onload = function() {

    let $imageCarousel = $('#carousel')
    let $images = $('#carousel>li')
    let imagesNum = $images.length
    let $navs = $('#nav>li')
    let timeId
    let $nextButton = $('.button-next')
    let $preButton = $('.button-pre')



    let inPage = 0     //重要的两个参数：进入页面和离开页面
    let outPage = 0
    let canClick = true




    nextFade()
    autoFade()


//自动轮播
    function  autoFade() {
        timeId = setInterval(function() {
            nextFade()
        },3000)
    }


//下一页逻辑
    function nextFade(len) {
        if(!canClick) {
            return
        }
        canClick = false
        if(len) {
            inPage += len - 1
        }
        if(inPage > imagesNum - 1) {
            inPage = 0
        }
        $images.eq(outPage).fadeOut(1000)
        $images.eq(inPage).fadeIn(1000,function() {
            canClick = true
        })
        setNav(inPage)
        outPage = inPage    //传递下一轮消失页面
        inPage++
    }

//上一页逻辑
    function preFade(len) {
        if(!canClick) {
            return
        }
        canClick = false
        if(len) {
            inPage -= len + 1
        } else {
            inPage -= 2
        }
        if(inPage < 0) {
            inPage = imagesNum - 1
        }
        $images.eq(outPage).fadeOut(1000)
        $images.eq(inPage).fadeIn(1000,function() {
            canClick = true
        })
        setNav(inPage)
        outPage = inPage    //传递下一轮消失页面
        inPage++
    }


//导航条设置
    function setNav(index) {
        $navs.eq(index).addClass('active')
        $navs.eq(index).siblings().removeClass('active')
    }


//next事件
    $nextButton.on('click',function() {
        window.clearInterval(timeId)
        nextFade()
        autoFade()
    })


//pre事件
    $preButton.on('click',function() {
        window.clearInterval(timeId)
        preFade()
        autoFade()
    })

//nav事件
    $navs.on('click',function(){
        window.clearInterval(timeId)
        var clickIndex = $(this).index()
        if(clickIndex > outPage) {
            nextFade(clickIndex - outPage)
        } else if (clickIndex < outPage) {
            preFade(outPage - clickIndex)
        }
        autoFade()
    })
}



