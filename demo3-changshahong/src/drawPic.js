function drawPic () {
    //擦除画布函数,原理是在目标画布上画一个透明的圆
    //基于TweenJS
    function clearCanvas (ctx, canvasWidth, canvasHeight, callback) {
        //启动函数
        function action () {
            let id = requestAnimationFrame(action)
            let result = TWEEN.update()
            if (!result) cancelAnimationFrame(id)
        }

        let r = {r: 0}      //初始半径
        let tween = new TWEEN.Tween(r)
            .to({r: canvasWidth}, 2000) //目标半径
            .easing(TWEEN.Easing.Quadratic.Out)
            .onUpdate(function () {
                ctx.save()
                ctx.globalCompositeOperation = 'destination-out'        //源目标在当前目标上,源目标内当前目标不可见,源目标外当前目标可见,源目标透明
                ctx.beginPath()
                ctx.arc(canvasWidth / 2, canvasHeight / 2, r.r, 0, 2 * Math.PI)     //x,y,半径,起始角度,结束角度
                ctx.fill()
                ctx.closePath()
            })
            .onComplete(function () {
                callback && callback.call(null)
            })
            .start()
        action()
    }

    //开福寺
    !function () {
        let $temple = $('.temple')
        let templeCtx = $temple[0].getContext('2d')
        let $xianglu = $('.xianglu')
        let canvasHeight = $temple[0].height
        let canvasWidth = $temple[0].width

        let templeImg = new Image()
        templeImg.onload = function () {
            templeCtx.drawImage(templeImg, 0, 0, 640, 963)
        }
        templeImg.src = './images/a-room.png'

        $xianglu.one('click', function () {
            $xianglu.addClass('animate')
            clearCanvas(templeCtx, canvasWidth, canvasHeight, function () {
                let $kaifuTip = $('.kaifu-tip')
                $('.page1-wrap>.finger').css('display', 'none')
                $('.page1-wrap>.tip-icon').css('display', 'block').on('click', function () {
                    $kaifuTip.fadeIn()
                })
                $kaifuTip.on('click', function () {
                    $(this).fadeOut()
                })
                $kaifuTip.fadeIn()
            })
        })
    }()

    //岳麓书院
    !function () {
        let $yuelushuyuan = $('.yuelushuyuan')
        let yuelushuyuanCtx = $yuelushuyuan[0].getContext('2d')
        let canvasHeight = $yuelushuyuan[0].height
        let canvasWidth = $yuelushuyuan[0].width

        let yuelushuyuanImg = new Image()
        yuelushuyuanImg.onload = function () {
            yuelushuyuanCtx.drawImage(yuelushuyuanImg, 0, 0, 640, 1035)
        }
        yuelushuyuanImg.src = './images/a-door.png'

        $yuelushuyuan.one('click', function () {
            clearCanvas(yuelushuyuanCtx, canvasWidth, canvasHeight, function () {
                let $yuelushuyuanTip = $('.yuelushuyuan-tip')
                $('.page2-wrap>.finger').css('display', 'none')
                $('.page2-wrap>.tip-icon').css('display', 'block').on('click', function () {
                    $yuelushuyuanTip.fadeIn()
                })
                $yuelushuyuanTip.on('click', function () {
                    $(this).fadeOut()
                })
                $yuelushuyuanTip.fadeIn()
            })
        })
    }()


    //第一师范
    !function () {
        let $school = $('.school')
        let schoolCtx = $school[0].getContext('2d')
        let canvasHeight = $school[0].height
        let canvasWidth = $school[0].width
        let $flag = $('.page3-wrap > .flag')

        let schoolImg = new Image()
        schoolImg.onload = function () {
            schoolCtx.drawImage(schoolImg, 0, 0, 640, 875)
        }
        schoolImg.src = './images/b_room.png'

        $flag.one('click', function () {
            $(this).addClass('animate')
            clearCanvas(schoolCtx, canvasWidth, canvasHeight, function () {
                let $diyishifanTip = $('.diyishifan-tip')
                $('.page3-wrap>.finger').css('display', 'none')
                $('.page3-wrap>.tip-icon').css('display', 'block').on('click', function () {
                    $diyishifanTip.fadeIn()
                })
                $diyishifanTip.on('click', function () {
                    $(this).fadeOut()
                })
                $diyishifanTip.fadeIn()
            })
        })
    }()
}

export {drawPic}