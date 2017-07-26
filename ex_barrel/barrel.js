
function Barrel($container,page,$loadElement) {    //container是容器，page是一次加载的多个张图片，$loadElement为曝光加载的曝光项
    this.$container = $container
    this.page = page
    this.imagesArray = []
    this.containerWidth = $container.width()
    this.imagesWidth = 0
    this.$loadElement = $loadElement
    this.init = function() {                    //运行主体
        this.loadImage()
        this.bindEvent()
    }

}


Barrel.prototype = {
    constructor: Barrel,                //重置construction
    loadImage: function () {            //加载图片
        let _this = this
        for(let i=0; i<_this.page; i++) {
            let img = new Image()
            let randomWidth = Math.floor((Math.random()*150) + 200)      //图片宽度[200,350)
            let url = `https://unsplash.it/${randomWidth}/200/`
            img.onload = function() {
                _this.renderPage(img)
            }
            img.src = url
        }
    },
    renderPage: function(img) {         //渲染页面
        let _this = this
        let imgWidth = img.width            //Image对象在图片加载完成即可获得图片宽高
                                            //$('<img>')的方法在未将图片放入页面中前，无法获取宽高
        _this.imagesWidth += imgWidth       //图片放入数组并累计宽度
        _this.imagesArray.push(img)
        if(_this.imagesWidth > _this.containerWidth) {
            _this.imagesArray.pop()
            _this.imagesArray.forEach(function(item,index) {
                $(item).css({
                    height: (_this.containerWidth*200)/(_this.imagesWidth - imgWidth) //当图片总宽超越容器时，舍弃掉最后一张
                })                                                                    //等比缩放当前数组中的图片，占满一行
                _this.$container.append($(item))
            })
            _this.imagesArray = []
            _this.imagesArray.push(img)             //重置数组和宽度累计
            _this.imagesWidth = imgWidth
        }
    },
    isLoad: function() {
        return (this.$loadElement.offset().top < ($(window).height() + $(window).scrollTop() + 100))
    },
    bindEvent: function() {                                     //曝光加载逻辑
        let _this = this
        $(window).on('scroll',function() {
            if(_this.isLoad()) {
                _this.loadImage()
            }
        })
    }
}

let barrel1 = new Barrel($('#container'),20,$('#load'))
barrel1.init()











// let imagesWidth = 0
// let $container = $('#container')
// let containerWidth = $container.width()
// let imagesArray = []
// let page = 20
// let $load = $('#load')



// function barrel() {
//     for(let i=0; i<page; i++) {
//         let img = new Image()
//         let randomWidth = Math.floor((Math.random()*150) + 200) //图片宽度[200,350)
//         let url = `https://unsplash.it/${randomWidth}/200/`
//         img.onload = (function() {
//             let imgWidth = img.width
//             imagesWidth += imgWidth
//             imagesArray.push(img)
//             if(imagesWidth > containerWidth) {
//                 imagesArray.pop()
//                 imagesArray.forEach(function(item,index) {
//                     $(item).css({
//                         height: (containerWidth*200)/(imagesWidth - imgWidth)
//                     })
//                     $container.append($(item))
//                 })
//                 imagesArray = []
//                 imagesArray.push(img)
//                 imagesWidth = imgWidth
//             }
//
//         })
//         img.src = url
//     }
// }
//
// function isVisiable() {
//     return ($load.offset().top < ($(window).height() + $(window).scrollTop() + 100))
// }
//
// barrel()
// $(window).on('scroll',function() {
//     if(isVisiable()) {
//         barrel()
//     }
// })
