define(['jquery','bind','Carousel','waterFall'],function($,Bind,Carousel,Waterfall) {
    window.onload = function() {
        let $goTopButton = $('#gotop')
        let $nav = $('#nav')
        let $waterFallCt = $('#still .post')
        let $loadButtom = $('#still .load')
        Bind.init($goTopButton, $nav)
        Waterfall.init($waterFallCt, $loadButtom)
        Carousel.init($('#header .carousel'), $('#header .button-pre'), $('#header .button-next'), $('#header .nav'))
    }
})