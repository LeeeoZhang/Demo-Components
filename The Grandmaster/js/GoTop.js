let $goTopButton = $('#gotop')
let $nav = $('#nav')
let canScroll = true
$goTopButton.click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
})

$(window).on('scroll',function() {
    if(!canScroll) {
        return
    }
    canScroll = false
    if($(window).scrollTop() > 400) {
        $nav.animate({padding: 0,
                      opacity: 1},function() {
            canScroll = true
        })
    }
    if($(window).scrollTop() < 400) {
        $nav.animate({padding: '25px 0',
                      opacity: .5},function() {
            canScroll = true
        })
    }
    if($(window).scrollTop() === 0) {
        $nav.animate({padding: '25px 0'},function() {
            canScroll = true
        })
    }
})