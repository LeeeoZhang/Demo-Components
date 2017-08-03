define(['jquery'],function($){
    let Bind = (function() {
        function _Bind($goTopButton,$nav) {
            this.$goTopButton = $goTopButton
            this.$nav = $nav
            this.canScroll = true
            this.goTopEvent()
            this.windowScrollEvent()
        }
        _Bind.prototype.goTopEvent = function() {
            this.$goTopButton.click(function() {
                $("html, body").animate({ scrollTop: 0 }, "slow");
            })
        }
        _Bind.prototype.windowScrollEvent = function() {
            let _this = this
            $(window).on('scroll',function() {
                if(!_this.canScroll) {
                    return
                }
                _this.canScroll = false
                if($(window).scrollTop() > 1000) {
                    _this.$nav.animate({padding: 0,
                        opacity: 1},function() {
                        _this.canScroll = true
                    })
                }
                if($(window).scrollTop() < 1000) {
                    _this.$nav.animate({padding: '25px 0',
                        opacity: .5},function() {
                        _this.canScroll = true
                    })
                }
                if($(window).scrollTop() === 0) {
                    _this.$nav.animate({padding: '25px 0'},function() {
                        _this.canScroll = true
                    })
                }
            })
        }
        return {
            init: function($goTopButton,$nav) {
                new _Bind($goTopButton,$nav)
            }
        }
    })()
    return Bind
})
