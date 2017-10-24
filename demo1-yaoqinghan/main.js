import './index.scss'
import $ from 'jquery'


// $('body').on('touchmove', function (event) {
//     if (event.preventDefault) {
//         event.preventDefault()
//     } else {
//         even.returnValue = false
//     }
// },{passive: false})
let cliHeight = window.innerHeight,
    startY,
    moveY,
    page1Wrap = $('.page1-wrap')

function touchStart ($event) {
    startY = $event.originalEvent.touches[0].pageY
    moveY = 0
}

//moveY>0,上滑,反之下滑
function touchEnd ($event) {
    moveY = $event.originalEvent.touches[0].pageY - startY
    if (moveY > 0) {
        // ..
    }
    if (moveY < 0) {
        page1Wrap.css('transform','translateY(-100%)')
    }
}

// page1Wrap.on('touchstart',function($event) {
//     $event.originalEvent.preventDefault()
//     touchStart($event)
// })
page1Wrap.on('touchend',function($event) {
    console.log('end')
    touchEnd($event)
})


