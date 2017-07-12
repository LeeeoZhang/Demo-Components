let images = $("img")
let windowHeight = $(window).height()
let clock


lazyLoad()
$(window).on("scroll",function() {
    if(clock) {                         //clock防止lazyLoad多次执行，只有滚动停止时，才执行；
        clearTimeout(clock)
    }
    clock = setTimeout(function() {
        lazyLoad()
    },200)
})


function lazyLoad() {
    let scrollTop = $(window).scrollTop();
    images.each(function(index,item) {
        if(isShow(item,scrollTop)) {
            showPic(item)
        }
    })
}

function isShow(item,scrollTop) {                   //检查元素是否出现在可视范围
    let itemOffsetTop = $(item).offset().top;
    if(scrollTop + windowHeight > itemOffsetTop){
        return true
    }
    return false
}
function showPic(item) {                            //展示图片
    item.src = item.getAttribute('data-src')
}