function initMusic ($wrap) {
    let $musicWrap = $('<div class="bgm play"></div>')
    let $music = $('<audio loop autoplay></audio>')
    $music.attr('src', './images/bgm.mp3')
    $musicWrap.css({
        display: 'block',
        position: 'fixed',
        left: '20px',
        bottom: '30px',
        width: '48px',
        height: '48px',
        backgroundImage: 'url(http://img.cntapp.com/h5/dragon/assets/music.png)',
        backgroundPosition: '-48px 0',
        zIndex: 50
    })

    $musicWrap.on('click',function(){
        if($(this).hasClass('play')) {
            $(this).removeClass('play').addClass('pause').css({
                backgroundPosition: '0 0'
            })
            $music[0].pause()
        } else {
            $music[0].play()
            $(this).removeClass('pause').addClass('play').css({
                backgroundPosition: '-48px 0'
            })
        }
    })

    $musicWrap.append($music)
    $wrap.append($musicWrap)

}

export {initMusic}