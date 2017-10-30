import './index.scss'
import './animate.scss'
import 'velocity-animate/velocity.min'
// import 'velocity-animate/velocity.ui.min'
import  './jquery.imgpreload/dist/jquery.imgpreload.js'
import bindTouchEvent from './touchEvent'


let cliHeight = window.innerHeight,
    $allImages = $('#wrap img'),
    startY,
    moveY,
    isAnimate = false, //动画锁
    $preLoadCtn = $('.preload'),
    $page1Wrap = $('.page1-wrap'),
    $page2Wrap = $('.page2-wrap'),
    $page3Wrap = $('.page3-wrap'),
    $page4Wrap = $('.page4-wrap'),
    $page4ContentImg = $('.page4-wrap>.content>img'),
    $page5Wrap = $('.page5-wrap'),
    $page6Wrap = $('.page6-wrap'),
    $joinBtn = $('.page2-wrap>.join-btn'),
    name = '',
    gender = '',
    tel = '',
    card = '',
    percent,
    $nameInput = $('.page2-wrap .name'),
    $genderInput = $('.page2-wrap input:radio[name=gender]'),
    $telInput = $('.page2-wrap .tel'),
    $cardInput = $('.page2-wrap .card')


$allImages.imgpreload({
    each: function (a) {
        percent = Math.round((a.length / $allImages.length) * 100)
        $preLoadCtn.text(`${percent}%`)
        if (percent === 100) {
            $preLoadCtn.css({display: 'none'})
            $page1Wrap.removeClass('hide')
            $('.bgm').append('<audio autoplay loop src=""><audio>')
        }
    }
})
// document.querySelector('body').addEventListener('touchmove',function(event){
//     event.preventDefault()
// })
$('body').on('touchmove', function ($event) {
    $event.preventDefault()
})

function touchStart ($event) {
    startY = $event.originalEvent.touches[0].pageY
    moveY = 0
}

//page1手势事件
//moveY>0,上滑,反之下滑
bindTouchEvent($page1Wrap, function () {
    if (isAnimate) return
    isAnimate = true
    $page1Wrap.velocity({translateY: "-100%", opacity: 0}, {
        duration: 2000,
        easing: 'ease',
        display: 'none',
        complete: function () {
            // $page1Wrap.css({display: 'none'})
            // $page2Wrap.fadeIn(800, 'linear', function () {
            //     isAnimate = false
            // })
            $page2Wrap.addClass('action')
            $page2Wrap.velocity({opacity: 1}, {
                easing: 'linear',
                duration: 800,
                complete:function(){
                    isAnimate = false
                }
            })
        }
    })

}, null)
// function page2TouchEnd ($event) {
//     moveY = $event.originalEvent.changedTouches[0].pageY - startY
//     if (moveY < -50) {
//         isAnimate = true
//         $page1Wrap.css({
//             transform: 'translateY(-100%)',
//             opacity: 0
//         }, 2000)
//     }
//     $page1Wrap.on('transitionend', function fn () {
//         $page1Wrap.css({display: 'none'})
//         $page2Wrap.fadeIn(800, 'linear', function () {
//             $page1Wrap.off('transitionend', fn)
//             isAnimate = false
//         })
//     })
// }
//
// $page1Wrap.on('touchstart', function ($event) {
//     touchStart($event)
// })
// $page1Wrap.on('touchend', function ($event) {
//     if (isAnimate) return
//     page2TouchEnd($event)
// })


//page2事件
!function () {
    bindTouchEvent($page2Wrap, null, function () {
        if(isAnimate) return
        isAnimate = true
        $page2Wrap.velocity('fadeOut', {
            display: 'block',
            easing: 'linear',
            complete: function () {
                $page1Wrap.velocity({translateY: 0, opacity: 1}, {
                    duration: 2000,
                    display: 'block',
                    complete: function () {
                        isAnimate = false
                    }
                })
            }
        })
    })


    // function page2TouchEnd ($event) {
    //     moveY = $event.originalEvent.changedTouches[0].pageY - startY
    //     if (moveY > 50) {
    //         isAnimate = true
    //         $page2Wrap.fadeOut(800, 'linear', function () {
    //             $page1Wrap.css({display: 'block'})
    //             setTimeout(function () {
    //                 $page1Wrap.css({
    //                     transform: 'translateY(0)',
    //                     opacity: 1
    //                 })
    //                 //解锁
    //                 $page1Wrap.on('transitionend', function fn () {
    //                     $page1Wrap.off('transitionend', fn)
    //                     isAnimate = false
    //                 })
    //             }, 300)
    //         })
    //     }
    // }
    //
    // $page2Wrap.on('touchstart', function ($event) {
    //     touchStart($event)
    // })
    // $page2Wrap.on('touchend', function ($event) {
    //     page2TouchEnd($event)
    // })
    // $page2Wrap.on('transitionend', function ($event) {
    //     page2TouchEnd($event)
    // })
    $joinBtn.on('click', function ($event) {
        if(isAnimate) return
        isAnimate = true
        $page3Wrap.velocity({translateY: "-100%"},{
            duration: 500,
            easing: 'linear',
            complete:function(){
                $page3Wrap.find('.name').text(name + gender)
                isAnimate = false
            }
        })
        // $page3Wrap.css({transform: `translateY(-100%)`})
        // $page3Wrap.find('.name').text(name + gender)
    })


    //监听输入事件,获取信息
    $nameInput.on('input', function ($event) {
        name = $(this).val()
    })
    $genderInput.on('change', function ($event) {
        gender = $(this).val()
    })
    $telInput.on('input', function ($event) {
        tel = $(this).val()
    })
    $cardInput.on('input', function ($event) {
        card = $(this).val()
    })
}()


//page3手势事件
!function () {

    bindTouchEvent($page3Wrap, function ($event) {
        if(isAnimate) return
        isAnimate = true
        $page4Wrap.velocity({translateY: ["-200%","-100%"]}, {
            duration: 500,
            easing: 'linear',
            complete:function(){
                isAnimate = false
            }
        })
    }, function ($event) {
        if(isAnimate) return
        isAnimate = true
        $page3Wrap.velocity({translateY: 0}, {
            duration: 500,
            easing: 'linear',
            complete:function(){
                isAnimate = false
            }
        })
    })
    // function page3TouchEnd ($event) {
    //     moveY = $event.originalEvent.changedTouches[0].pageY - startY
    //     if (moveY > 50) {
    //         $page3Wrap.css({transform: `translateY(0)`})
    //     }
    //     if (moveY < -50) {
    //         $page4Wrap.css({transform: `translateY(-200%)`})
    //     }
    // }
    //
    // $page3Wrap.on('touchstart', function ($event) {
    //     touchStart($event)
    // })
    // $page3Wrap.on('touchend', function ($event) {
    //     page3TouchEnd($event)
    // })
}()

//page4手势事件
!function () {
    let n = 0,          //页内图片滚动记录
        distance = 0    //页内图片滚动距离

    bindTouchEvent($page4Wrap, function ($event) {
        if(isAnimate) return
        isAnimate = true
        if (n < 2) {
            distance += 500
            $page4ContentImg.velocity({translateY: `-${distance}px`}, {
                easing: 'linear',
                duration: 500,
                complete:function(){
                    isAnimate = false
                }
            })
            n++
        } else {
            $page5Wrap.velocity({translateY: ["-300%","-200%"]}, {
                easing: 'linear',
                duration: 500,
                complete: function () {
                    $page5Wrap.find('p').removeClass('hide')
                    // $page5Wrap.addClass('action')
                    // $page4ContentImg.css({transform: `translateY(0)`})
                    isAnimate = false
                    $page4ContentImg.velocity({translateY: `0px`}, {
                        duration: 0
                    })
                    n = 0
                    distance = 0
                }
            })
        }
    }, function ($event) {
        if(isAnimate) return
        isAnimate = true
        if (n !== 0) {
            distance -= 500
            $page4ContentImg.velocity({translateY: `-${distance}px`}, {
                easing: 'linear',
                duration: 500,
                complete:function(){
                    isAnimate = false
                }
            })
            n--
        } else {
            $page4Wrap.velocity({translateY: "-100%"},{
                complete:function(){
                    isAnimate = false
                }
            })
        }
    })


    // function page4TouchEnd ($event) {
    //     moveY = $event.originalEvent.changedTouches[0].pageY - startY
    //     if (moveY > 50) {
    //         if (n !== 0) {      //页内滚动滚动判断
    //             distance -= 500
    //             $page4ContentImg.css({transform: `translateY(-${distance}px)`})
    //             n--
    //         } else {
    //             $page4Wrap.css({transform: `translateY(-100%)`})
    //             $page5Wrap.addClass('action')
    //         }
    //     }
    //     if (moveY < -50) {
    //         if (n < 2) {
    //             distance += 500
    //             $page4ContentImg.css({transform: `translateY(-${distance}px)`})
    //             n++
    //         } else {
    //             $page5Wrap.css({transform: `translateY(-300%)`})
    //             $page5Wrap.on('transitionend', function fn () {
    //                 $page5Wrap.find('p').removeClass('hide')
    //                 $page5Wrap.addClass('action')
    //                 $page5Wrap.off('transitionend', fn)
    //             })
    //             n = 0
    //             distance = 0
    //         }
    //     }
    // }
    //
    // $page4Wrap.on('touchstart', function ($event) {
    //     touchStart($event)
    // })
    // $page4Wrap.on('touchend', function ($event) {
    //     page4TouchEnd($event)
    // })
}()

//page5手势事件
!function () {
    bindTouchEvent($page5Wrap,function($event){
        if(isAnimate) return
        isAnimate = true
        $page6Wrap.velocity({translateY: ["-400%","-300%"]},{
            duration: 500,
            easing: 'linear',
            complete: function(){
                $page6Wrap.find('p').removeClass('hide')
                $page5Wrap.find('p').addClass('hide')
                isAnimate = false
            }
        })
    },function($event){
        if(isAnimate) return
        isAnimate = true
        $page5Wrap.velocity({translateY: "-200%"},{
            duration: 500,
            easing: 'linear',
            complete: function(){
                $page5Wrap.find('p').addClass('hide')
                isAnimate = false
            }
        })
    })
    // function page5TouchEnd ($event) {
    //     moveY = $event.originalEvent.changedTouches[0].pageY - startY
    //     if (moveY > 50) {
    //
    //         new Promise((resolve, reject) => {
    //             $page5Wrap.css({transform: `translateY(-200%)`})
    //             $page5Wrap.on('transitionend', function fn () {
    //                 $page5Wrap.off('transitionend', fn)
    //                 resolve()
    //             })
    //         }).then(() => {
    //             $page5Wrap.find('p').addClass('hide')
    //             $page5Wrap.removeClass('action')
    //         })
    //
    //         // $page5Wrap.css({transform: `translateY(-200%)`})
    //         // $page5Wrap.on('transitionend',function fn(){
    //         //     $page5Wrap.find('p').addClass('hide')
    //         //     $page5Wrap.removeClass('action')
    //         //     $page5Wrap.off('transitionend',fn)
    //         // })
    //     }
    //     if (moveY < -50) {
    //         new Promise((resolve, reject) => {
    //             $page6Wrap.css({transform: `translateY(-400%)`})
    //             $page6Wrap.on('transitionend', function fn () {
    //                 $page6Wrap.off('transitionend', fn)
    //                 resolve()
    //             })
    //         }).then(() => {
    //             //page6添加动画
    //             $page6Wrap.find('p').removeClass('hide')
    //             $page6Wrap.addClass('action')
    //             //page5去除动画
    //             $page5Wrap.find('p').addClass('hide')
    //             $page5Wrap.removeClass('action')
    //         })
    //         // $page6Wrap.css({transform: `translateY(-400%)`})
    //         // $page6Wrap.on('transitionend',function fn(){
    //
    //         //     //page6添加动画
    //         //     $page6Wrap.find('p').removeClass('hide')
    //         //     $page6Wrap.addClass('action')
    //         //     $page6Wrap.off('transitionend',fn)
    //
    //         //     //page5去除动画
    //         //     $page5Wrap.find('p').addClass('hide')
    //         //     $page5Wrap.removeClass('action')
    //
    //         //     $page6Wrap.off('transitionend',fn)
    //         // })
    //     }
    // }
    //
    // $page5Wrap.on('touchstart', function ($event) {
    //     touchStart($event)
    // })
    // $page5Wrap.on('touchend', function ($event) {
    //     page5TouchEnd($event)
    // })
    // $page5Wrap.on('transitionend', function ($event) {
    //     $page4ContentImg.css({transform: `translateY(0)`})
    // })
}()

//page6手势事件
!function () {

    bindTouchEvent($page6Wrap,null,function($event){
        if(isAnimate) return
        isAnimate = true
        $page6Wrap.velocity({translateY: "-300%"},{
            duration: 500,
            easing: 'linear',
            complete: function(){
                $page5Wrap.find('p').removeClass('hide')
                $page6Wrap.find('p').addClass('hide')
                $page6Wrap.removeClass('action')
                $page5Wrap.addClass('action')
                isAnimate = false
            }
        })
    })
    // function page6TouchEnd ($event) {
    //     moveY = $event.originalEvent.changedTouches[0].pageY - startY
    //     if (moveY > 50) {
    //         new Promise((resolve, reject) => {
    //             $page6Wrap.css({transform: `translateY(-300%)`})
    //             $page6Wrap.on('transitionend', function fn () {
    //                 //解除事件
    //                 $page6Wrap.off('transitionend', fn)
    //                 resolve()
    //             })
    //         }).then(() => {
    //             //page5添加动画
    //             $page5Wrap.find('p').removeClass('hide')
    //             $page5Wrap.addClass('action')
    //             //page6去除动画
    //             $page6Wrap.find('p').addClass('hide')
    //             $page6Wrap.removeClass('action')
    //         })
    //         // $page6Wrap.css({transform: `translateY(-300%)`})
    //         // $page6Wrap.on('transitionend',function fn(){
    //         //
    //         //     //page5添加动画
    //         //     $page5Wrap.find('p').removeClass('hide')
    //         //     $page5Wrap.addClass('action')
    //         //
    //         //     //page6去除动画
    //         //     $page6Wrap.find('p').addClass('hide')
    //         //     $page6Wrap.removeClass('action')
    //         //     //解除事件
    //         //     $page6Wrap.off('transitionend',fn)
    //         // })
    //     }
    // }
    //
    // $page6Wrap.on('touchstart', function ($event) {
    //     touchStart($event)
    // })
    // $page6Wrap.on('touchend', function ($event) {
    //     page6TouchEnd($event)
    // })
}()

//transitionend事件完成后都应该卸载掉事件
//每次页面离开都删除掉动画类名并隐藏动画元素,保证每次进入页面都能执行动画
