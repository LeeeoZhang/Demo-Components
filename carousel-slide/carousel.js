//jQuery
// let Carousel = (function() {
//     let $imagesCarousel = $('#carousel')
//     let $images = $('#carousel>li')
//     let imagesNum = $images.length          //图片数量
//     let imageSize = $images.width()
//     let $navs = $('#nav>li')
//     let index = 0
//     let canClick = true
//     let timeId
//     let $preButton = $('.button-pre')
//     let $nextButton = $('.button-next')
//     //首尾图片插入
//     $images.first().clone().appendTo($imagesCarousel)
//     $images.last().clone().prependTo($imagesCarousel)
//     $imagesCarousel.css({left: -imageSize})
//     //自动播放
//     function autoPlay() {
//         timeId =  setInterval(function() {
//             canClick = false
//             next()
//         },2500)
//     }
//     function bind() {
//         //上一页事件
//         $preButton.on('click', function (e) {
//             if (!canClick) {
//                 return
//             }
//             canClick = false
//             window.clearInterval(timeId)
//             e.preventDefault()
//             pre()
//             autoPlay()
//         })
//         //下一页事件
//         $nextButton.on('click', function (e) {
//             if (!canClick) {
//                 return
//             }
//             canClick = false
//             window.clearInterval(timeId)
//             e.preventDefault()
//             next()
//             autoPlay()
//         })
//         //nav事件
//         $navs.on('click', function (e) {
//             if (!canClick) {
//                 return
//             }
//             canClick = false
//             window.clearInterval(timeId)
//             e.preventDefault()
//             let page = $(this).index()
//
//             // 方法1
//             $imagesCarousel.animate({left: -imageSize * (page + 1)}, 1000, function () {
//                 index = page
//                 setNav(page)
//                 autoPlay()
//                 canClick = true
//             })
//         })
//     }
//     //上一页逻辑
//     function pre() {
//         $imagesCarousel.animate({left: "+=" + imageSize*1},1000,function() {
//             index -= 1
//             if(index < 0) {
//                 $imagesCarousel.css({left: -imageSize*imagesNum})
//                 index = imagesNum - 1
//             }
//             setNav(index)
//             canClick = true
//         })
//     }
//     //下一页逻辑
//     function next() {
//         $imagesCarousel.animate({left: "-=" + imageSize*1},1000,function() {
//             index += 1
//             if(index === imagesNum) {
//                 $imagesCarousel.css({left: -imageSize})
//                 index = 0
//             }
//             setNav(index)
//             canClick = true
//         })
//     }
//     //导航条设置
//     function setNav(index) {
//         $navs.eq(index).addClass('active')
//         $navs.eq(index).siblings().removeClass('active')
//     }
//
//     return {
//         init: function() {
//             bind()
//             autoPlay()
//         }
//     }
// })()
// Carousel.init()


// //原生js！
let Carousel = (function() {
    function $(element, selector) {
        return element.querySelector(selector)
    }

    function $$(element, selector) {
        return element.querySelectorAll(selector)
    }

    let imagesCarousel = $(document, '#carousel'),
        images = $$(imagesCarousel, 'li'),
        imagesNum = images.length,        //图片数量
        imageSize = images[0].offsetWidth,
        navContainer = $(document, '#nav'),
        index = 0,
        canClick = true,
        globalTimer,
        preButton = $(document, '.button-pre'),
        nextButton = $(document, '.button-next')

    imagesCarousel.appendChild(images[0].cloneNode(true))
    imagesCarousel.insertBefore(images[imagesNum - 1].cloneNode(true), images[0])
    imagesCarousel.style.left = `-${imageSize}px`

//下一页逻辑
    function next(a) {
        let distance = a || 1
        let left1 = parseFloat(imagesCarousel.style.left)   //保存移动距离
        let left2 = parseFloat(imagesCarousel.style.left)   //保存移动前的距离
        let timer = setInterval(function () {
            left1 -= imageSize * distance / 80
            imagesCarousel.style.left = left1 + 'px'
            if (Math.abs(Math.round(parseFloat(imagesCarousel.style.left))) - Math.abs(left2) === imageSize * distance) {
                window.clearInterval(timer)
                index += distance
                if (index === imagesNum) {
                    imagesCarousel.style.left = `-${imageSize}px`
                    index = 0
                }
                setNav(index)
                canClick = true
            }
        }, 10)
    }

//上一页逻辑
    function pre(a) {
        let distance = a || 1
        let left1 = parseFloat(imagesCarousel.style.left)
        let left2 = parseFloat(imagesCarousel.style.left)
        let timer = setInterval(function () {
            left1 += imageSize * distance / 80
            imagesCarousel.style.left = left1 + 'px'
            if (Math.abs(left2) - Math.abs(Math.round(parseFloat(imagesCarousel.style.left))) === imageSize * distance) {
                window.clearInterval(timer)
                index -= distance
                canClick = true
                if (index < 0) {
                    imagesCarousel.style.left = `-${imageSize * imagesNum}px`
                    index = imagesNum - 1
                }
                setNav(index)
                canClick = true
            }
        }, 10)
    }

//导航条设置
    function setNav(index) {
        let navs = $$(navContainer, 'li')
        navs.forEach(function (item) {
            item.classList.remove('active')
        })
        navs[index].classList.add('active')
    }

//自动播放
    function autoPlay() {
        globalTimer = setInterval(function () {
            canClick = false
            next()
        }, 2500)
    }

    function bind() {
        nextButton.addEventListener('click', function (e) {
            if (!canClick) {
                return
            }
            canClick = false
            window.clearInterval(globalTimer)
            e.preventDefault()
            next()
            autoPlay()
        })

        preButton.addEventListener('click', function (e) {
            if (!canClick) {
                return
            }
            canClick = false
            window.clearInterval(globalTimer)
            e.preventDefault()
            pre()
            autoPlay()
        })

        navContainer.addEventListener('click', function (e) {
            if (!canClick) {
                return
            }
            canClick = false
            window.clearInterval(globalTimer)
            let target = e.target
            if (target.tagName.toLowerCase() === 'li') {
                let navs = $$(this, 'li')
                let navIndex = [].indexOf.call(navs, target)
                if (navIndex > index) {
                    next(navIndex - index)
                    autoPlay()
                } else if (navIndex < index) {
                    pre(index - navIndex)
                    autoPlay()
                } else {
                    autoPlay()
                }
            }

        })
    }

    return {
        init: function() {
            autoPlay()
            bind()
        }
    }
})()

Carousel.init()

