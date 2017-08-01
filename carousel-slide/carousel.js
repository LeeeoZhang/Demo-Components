//jQuery
let Carousel = (function() {
    let $imagesCarousel = $('#carousel')
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
    //自动播放
    function autoPlay() {
        timeId =  setInterval(function() {
            canClick = false
            next()
        },2500)
    }
    function bind() {
        //上一页事件
        $preButton.on('click', function (e) {
            if (!canClick) {
                return
            }
            canClick = false
            window.clearInterval(timeId)
            e.preventDefault()
            pre()
            autoPlay()
        })
        //下一页事件
        $nextButton.on('click', function (e) {
            if (!canClick) {
                return
            }
            canClick = false
            window.clearInterval(timeId)
            e.preventDefault()
            next()
            autoPlay()
        })
        //nav事件
        $navs.on('click', function (e) {
            if (!canClick) {
                return
            }
            canClick = false
            window.clearInterval(timeId)
            e.preventDefault()
            let page = $(this).index()

            // 方法1
            $imagesCarousel.animate({left: -imageSize * (page + 1)}, 1000, function () {
                index = page
                setNav(page)
                autoPlay()
                canClick = true
            })
        })
    }
    //上一页逻辑
    function pre() {
        $imagesCarousel.animate({left: "+=" + imageSize*1},1000,function() {
            index -= 1
            if(index < 0) {
                $imagesCarousel.css({left: -imageSize*imagesNum})
                index = imagesNum - 1
            }
            setNav(index)
            canClick = true
        })
    }
    //下一页逻辑
    function next() {
        $imagesCarousel.animate({left: "-=" + imageSize*1},1000,function() {
            index += 1
            if(index === imagesNum) {
                $imagesCarousel.css({left: -imageSize})
                index = 0
            }
            setNav(index)
            canClick = true
        })
    }
    //导航条设置
    function setNav(index) {
        $navs.eq(index).addClass('active')
        $navs.eq(index).siblings().removeClass('active')
    }

    return {
        init: function() {
            bind()
            autoPlay()
        }
    }
})()
Carousel.init()


//原生js
// let Carousel = (function() {
//     function _Carousel(carouselCt,navCt,nextButton,preButton) {
//         this.imagesCarousel = carouselCt
//         this.images = this.$$(this.imagesCarousel,'li')
//         this.imagesNum = this.images.length
//         this.imageSize = this.images[0].offsetWidth
//         this.navContainer = navCt
//         this.index = 0
//         this.canClick = true
//         this.globalTimer
//         this.nextButton = nextButton
//         this.preButton = preButton
//         this.autoPlay()
//         this.bind()
//         this.imagesCarousel.appendChild(this.images[0].cloneNode(true))
//         this.imagesCarousel.insertBefore(this.images[this.imagesNum - 1].cloneNode(true), this.images[0])
//         this.imagesCarousel.style.left = `-${this.imageSize}px`
//     }
//     _Carousel.prototype.$ = (element, selector) => {
//         return element.querySelector(selector)
//     }
//     _Carousel.prototype.$$ = (element, selector) => {
//         return element.querySelectorAll(selector)
//     }
//     _Carousel.prototype.next = function(a) {
//         let distance = a || 1
//         let _this = this
//         let left1 = parseFloat(this.imagesCarousel.style.left)  //保存移动距离
//         let left2 = parseFloat(this.imagesCarousel.style.left)	//保存最初移动距离
//         let timer = setInterval(() => {
//             left1 -= _this.imageSize * distance / 80
//             _this.imagesCarousel.style.left = left1 + 'px'
//             if (Math.abs(Math.round(parseFloat(_this.imagesCarousel.style.left))) - Math.abs(left2) === _this.imageSize * distance) {
//                 window.clearInterval(timer)
//                 _this.index += distance
//                 if(_this.index === _this.imagesNum) {
//                     _this.imagesCarousel.style.left = `-${_this.imageSize}px`
//                     _this.index = 0
//                 }
//                 _this.setNav(_this.index)
//                 _this.canClick = true
//             }
//         },10)
//     }
//     _Carousel.prototype.pre = function(a) {
//         let distance = a || 1
//         let _this = this
//         let left1 = parseFloat(this.imagesCarousel.style.left)  //保存移动距离
//         let left2 = parseFloat(this.imagesCarousel.style.left)	//保存最初移动距离
//         let timer = setInterval(() => {
//             left1 += _this.imageSize * distance / 80
//             _this.imagesCarousel.style.left = left1 + 'px'
//             if (Math.abs(left2) - Math.abs(Math.round(parseFloat(_this.imagesCarousel.style.left))) === _this.imageSize * distance) {
//                 window.clearInterval(timer)
//                 _this.index -= distance
//                 if(_this.index < 0) {
//                     _this.imagesCarousel.style.left = `-${_this.imageSize * _this.imagesNum}px`
//                     _this.index = _this.imagesNum - 1
//                 }
//                 _this.setNav(_this.index)
//                 _this.canClick = true
//             }
//         },10)
//     }
//     _Carousel.prototype.setNav = function(index) {
//         let navs = this.$$(this.navContainer,'li')
//         navs.forEach((item) => {
//             item.classList.remove('active')
//         })
//         navs[this.index].classList.add('active')
//     }
//     _Carousel.prototype.autoPlay = function() {
//         let _this = this
//         _this.globalTimer = setInterval(() => {
//             _this.canClick = false
//             _this.next()
//         },2500)
//     }
//     _Carousel.prototype.bind = function() {
//         let _this = this
//         _this.nextButton.addEventListener('click', function (e) {
//             if (!_this.canClick) {
//                 return
//             }
//             _this.canClick = false
//             window.clearInterval(_this.globalTimer)
//             e.preventDefault()
//             _this.next()
//             _this.autoPlay()
//         })
//         _this.preButton.addEventListener('click', function (e) {
//             if (!_this.canClick) {
//                 return
//             }
//             _this.canClick = false
//             window.clearInterval(_this.globalTimer)
//             e.preventDefault()
//             _this.pre()
//             _this.autoPlay()
//         })
//         _this.navContainer.addEventListener('click', function (e) {
//             if (!_this.canClick) {
//                 return
//             }
//             _this.canClick = false
//             window.clearInterval(_this.globalTimer)
//             let target = e.target
//             if (target.tagName.toLowerCase() === 'li') {
//                 let navs = _this.$$(this, 'li')
//                 let navIndex = [].indexOf.call(navs, target)
//                 console.log(navIndex)
//                 if (navIndex > _this.index) {
//                     _this.next(navIndex - _this.index)
//                     _this.autoPlay()
//                 } else if (navIndex < _this.index) {
//                     _this.pre(_this.index - navIndex)
//                     _this.autoPlay()
//                 } else {
//                     _this.autoPlay()
//                 }
//             }
//         })
//     }
//     return {
//         init: function(carouselCt,navCt,nextButton,preButton) {
//             new _Carousel(carouselCt,navCt,nextButton,preButton)
//         }
//     }
// })()
// let carouselCt = document.querySelector('#carousel')
// let navCt = document.querySelector('#nav')
// let preButton = document.querySelector('.button-pre')
// let nextButton = document.querySelector('.button-next')
// Carousel.init(carouselCt,navCt,nextButton,preButton)