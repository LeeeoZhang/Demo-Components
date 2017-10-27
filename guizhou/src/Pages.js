import $ from 'jquery'
import velocity from 'velocity-animate/velocity.min'

let Pages = function (parms) {
    let startY,
        moveY,
        isAnimate = false,
        cliHeight,
        startPage = parms.startPage,    //开始的页数,同时也是当前页数
        totalPages = parms.totalPages,  //总页数
        $pagesList = $('.page')
    let wrap1 = document.querySelector("#wrap1"),
        wrap2 = document.querySelector(".wrap2")

    //获取屏幕高度,监听resize事件,每当resize时重新获取
    function getCliHeight () {
        cliHeight = window.innerHeight
    }

    getCliHeight()
    window.addEventListener('resize', function () {
        getCliHeight()
    })

    //获取触摸开始时的y坐标
    function touchStart (event) {
        startY = event.touches[0].pageY
        moveY = 0
    }

    //计算y轴移动距离,判断上下滑动
    //moveY>0,向下滑动, moveY<0 向上滑动
    //同时移动wrap2
    function touchMove (event) {
        moveY = event.touches[0].pageY - startY
        // wrap2.style.transform = `translateY(${-startPage * cliHeight + moveY}px)`
    }

    function touchEnd (event) {
        if (moveY === 0) return
        if(isAnimate) return        //动画锁
        isAnimate = true
        if (moveY > 50) {
            startPage--
        }
        if (moveY < -50) {
            startPage++
        }
        if (startPage === totalPages) {
            startPage = totalPages - 1
        }
        if (startPage < 0) {
            startPage = 0
        }
        // wrap2.style.transition = ".3s linear"
        // wrap2.style.transform = `translate3d(0,${-startPage*14.29}%,0)`
        velocity(wrap2, {translateY: `${-startPage * 14.29}%`}, {
            duration: 300,
            easing: 'linear',
            complete: function() {
                console.log('动画完了')
                $pagesList.each(function (index, item) {
                    item.classList.add('hide')
                })
                $pagesList[startPage].classList.remove('hide')
                isAnimate = false
            }
        })
    }

    wrap2.addEventListener('touchstart', function (event) {
        touchStart(event)
    })
    wrap2.addEventListener('touchmove', function (event) {
        touchMove(event)
    })
    wrap2.addEventListener('touchend', function (event) {
        touchEnd(event)
    })
    // wrap2.addEventListener('transitionend', function fn () {
    //     console.log('动画完了')
    //     $pagesList.each(function (index, item) {
    //         item.classList.add('hide')
    //     })
    //     $pagesList[startPage].classList.remove('hide')
    // })
}

export {Pages}