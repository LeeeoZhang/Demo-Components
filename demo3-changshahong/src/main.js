import './reset.css'
import './style.scss'
import './animate.scss'
import 'velocity-animate/velocity.min'
import {bindEleAnimate} from './ele-animate'
import {initMusic} from './initMusic'
import {drawPic} from "./drawPic"


//禁用默认滑动事件
// document.body.addEventListener('touchmove',function(event){
//     event.preventDefault()
// })

let $window = $(window)
let windowHeight = $window.height()
let scrollTop
let timer1          //滚动节流
let $eleList = $('.ele')
let $wrap = $('#wrap')

$window.scroll(function(){
    if(timer1) {
        clearTimeout(timer1)
    }
    timer1 = setTimeout(function(){
        scrollTop = $window.scrollTop()
        bindEleAnimate($eleList,windowHeight,scrollTop)
    },150)
})


$('.page1-wrap>.ele').velocity({opacity: 1},{
    duration: 500,
    easing: 'linear',
    mobileHA: false
})

initMusic($wrap)
drawPic()