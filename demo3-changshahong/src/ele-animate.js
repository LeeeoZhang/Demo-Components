function bindEleAnimate(eleList,windowHeight,scrollTop) {
    eleList.each(function(index,item){
        let itemOffsetTop = $(item).offset().top
        if(scrollTop + windowHeight > itemOffsetTop && scrollTop < itemOffsetTop) {
            $(item).velocity({opacity: 1},{
                duration: 500,
                easing: 'linear',
                mobileHA: false
            })
        } else  {
            $(item).velocity({opacity: 0},{
                duration: 500,
                easing: 'linear',
                mobileHA: false
            })
        }
    })
}

export {bindEleAnimate}