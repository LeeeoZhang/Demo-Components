function drawPic() {


    let $temple = $('.temple')
    let templeCtx = $temple[0].getContext('2d')
    let $xianglu = $('.xianglu')
    let templeImg = new Image()

    templeImg.onload = function(){
        templeCtx.drawImage(templeImg,0,0,640,963)
    }
    templeImg.src = './images/a-room.png'

    $xianglu.one('click',function(){
        $xianglu.addClass('animate')
    })

}

export {drawPic}