









    let $imagesCarousel = $('#carousel');
    let $images = $('#carousel>li')
    let imagesNum = $images.length          //图片数量
    let imageSize = $images.width()
    let $navs = $('#nav>li')
    let index = 0
    let canClick = true
    let timeId

    let $preButton = $('.button-pre')
    let $nextButton = $('.button-next')


//首尾图片插入
    $images.first().clone().appendTo($imagesCarousel)
    $images.last().clone().prependTo($imagesCarousel)
    $imagesCarousel.css({left: -imageSize})


    autoPlay()

//自动播放
    function autoPlay() {
        timeId =  setInterval(function() {
            next()
        },2500)
    }

//上一页事件
    $preButton.on('click',function(e) {
        window.clearInterval(timeId)
        if(!canClick){
            return
        }
        canClick = false
        e.preventDefault()
        pre()
        autoPlay()
    })


//下一页事件
    $nextButton.on('click',function(e) {
        window.clearInterval(timeId)
        if(!canClick) {
            return
        }
        canClick =false
        e.preventDefault()
        next()
        autoPlay()
    })


//nav事件
    $navs.on('click',function(e) {
        window.clearInterval(timeId)
        if(!canClick) {
            return
        }
        canClick = false
        e.preventDefault()
        let page = $(this).index()

        //方法1
        // $imagesCarousel.animate({left: -imageSize*(page + 1)},1000,function() {
        //     canClick = true
        //     setNav(page)
        // })


        //方法2
        if(page > index) {
            next(page - index)
            autoPlay()
        } else if(page < index) {
            pre(index -page)
            autoPlay()
        }

    })


//上一页逻辑
    function pre(length) {
        if(length === undefined) {
            length = 1
        }
        $imagesCarousel.animate({left: "+=" + imageSize*length},1000,function() {
            canClick = true
            index -= length
            if(index < 0) {
                $imagesCarousel.css({left: -imageSize*imagesNum})
                index = imagesNum - 1
            }
            setNav(index)
        })
    }


//下一页逻辑
    function next(length) {
        if(length === undefined) {
            length = 1
        }
        $imagesCarousel.animate({left: "-=" + imageSize*length},1000,function() {
            canClick = true
            index += length
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








