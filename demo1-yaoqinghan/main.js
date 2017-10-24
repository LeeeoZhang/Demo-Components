import './index.scss'
import './animate.scss'
import $ from 'jquery'


let cliHeight = window.innerHeight,
    startY,
    moveY,
    $page1Wrap = $('.page1-wrap'),
    $page2Wrap = $('.page2-wrap')


function touchStart ($event) {
    startY = $event.originalEvent.touches[0].pageY
    moveY = 0
}

//page1滑动事件
!function(){
    //moveY>0,上滑,反之下滑
    function page2TouchEnd ($event) {
        moveY = $event.originalEvent.changedTouches[0].pageY - startY
        if (moveY > 0) {
            page1Wrap.css('transform','translateY(0)')
        }
        if (moveY < 0) {
            $page1Wrap.css({
                transform: 'translateY(-100%)',
                opacity: 0
            })
        }
    }

    $page1Wrap.on('touchstart',function($event) {
        touchStart($event)
    })
    $page1Wrap.on('touchend',function($event) {
        page2TouchEnd($event)
    })
    $page1Wrap.on('transitionend',function(){
        $page1Wrap.css({display: 'none'})
    })
}()

//page2滑动事件
!function(){
    function page2TouchEnd() {

    }

    $page2Wrap.on('touchstart',function($event) {
        touchStart($event)
    })
    $page2Wrap.on('touchend',function($event) {
        page2TouchEnd($event)
    })
    $page2Wrap.on('transitionend',function($event){
        page2TouchEnd($event)
    })
}()

