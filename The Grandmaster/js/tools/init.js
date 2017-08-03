define(['jquery','BindEvent','Carousel','waterFall'],function($,BindEvent,Carousel,Waterfall) {
        let $goTopButton = $('#gotop')
        let $nav = $('#nav')
        let $waterFallCt = $('#still .post')
        let $loadButtom = $('#still .load')
        BindEvent.init($goTopButton, $nav)
        Waterfall.init($waterFallCt, $loadButtom)
        Carousel.init($('#header .carousel'), $('#header .button-pre'), $('#header .button-next'), $('#header .nav'))
})