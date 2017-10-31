import './style.scss'
import './reset.css'


//禁用默认滑动事件
document.body.addEventListener('touchmove',function(event){
    event.preventDefault()
})


$(window).scroll(function(){
    console.log($(this).scrollTop())
})