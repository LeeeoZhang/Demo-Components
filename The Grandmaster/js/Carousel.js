let Carousel = (function() {
    function _Carousel($carouselCt,$preButton,$nextButton,$navCt) {
        this.$imagesCarousel = $carouselCt
        this.$preButton = $preButton
        this.$nextButton = $nextButton
        this.$navCt = $navCt
        this.$navs = $navCt.find('li')
        this.$images = this.$imagesCarousel.find('li')
        this.imagesNum = this.$images.length
        this.imageSize = this.$images.width()
        this.canClick = true
        this.index = 0
        this.timeId
        this.copyPicture()
        this.autoPlay()
        this.bind()
    }
    _Carousel.prototype.copyPicture = function() {
        this.$images.first().clone().appendTo(this.$imagesCarousel)
        this.$images.last().clone().prependTo(this.$imagesCarousel)
        this.$imagesCarousel.css({left: -(this.imageSize)})
    }
    _Carousel.prototype.autoPlay = function () {
        let _this = this
        _this.timeId =  setInterval(function() {
            _this.canClick = false
            _this.next()
        },2500)
    }
    _Carousel.prototype.pre = function() {
        let _this = this
        _this.$imagesCarousel.animate({left: "+=" + _this.imageSize*1},1000,function() {
            _this.index -= 1
            if(_this.index < 0) {
                _this.$imagesCarousel.css({left: -(_this.imageSize*_this.imagesNum)})
               _this.index = _this.imagesNum - 1
            }
            _this.setNav(_this.index)
            _this.canClick = true
        })
    }
    _Carousel.prototype.next = function() {
        let _this = this
        _this.$imagesCarousel.animate({left: "-=" + _this.imageSize*1},1000,function() {
            _this.index += 1
            if(_this.index === _this.imagesNum) {
                _this.$imagesCarousel.css({left: -(_this.imageSize)})
                _this.index = 0
            }
            _this.setNav(_this.index)
            _this.canClick = true
        })
    }
    _Carousel.prototype.setNav = function(index) {
        this.$navs.eq(index).addClass('active')
        this.$navs.eq(index).siblings().removeClass('active')
    }
    _Carousel.prototype.bind = function() {
        let _this = this
        _this.$preButton.on('click', function (e) {
            if(!_this.canClick) {
                return
            }
            _this.canClick = false
            window.clearInterval(_this.timeId)
            e.preventDefault()
            _this.pre()
            _this.autoPlay()
        })
        _this.$nextButton.on('click', function (e) {
            if (!_this.canClick) {
                return
            }
            _this.canClick = false
            window.clearInterval(_this.timeId)
            e.preventDefault()
            _this.next()
            _this.autoPlay()
        })
        _this.$navs.on('click', function (e) {
            if (!_this.canClick) {
                return
            }
            _this.canClick = false
            window.clearInterval(_this.timeId)
            e.preventDefault()
            let page = $(this).index()
            _this.$imagesCarousel.animate({left: -(_this.imageSize) * (page + 1)}, 1000, function () {
                _this.index = page
                _this.setNav(page)
                _this.autoPlay()
                _this.canClick = true
            })
        })
    }
    return {
        init: function($carouselCt,$preButton,$nextButton,$navCt) {
            new _Carousel($carouselCt,$preButton,$nextButton,$navCt)
        }
    }
})()
window.onload = function() {
    Carousel.init($('#header .carousel'),$('#header .button-pre'),$('#header .button-next'),$('#header .nav'))
}