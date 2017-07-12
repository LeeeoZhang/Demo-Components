let $loadMore = $('#loadMore')
let index = 0

function isVisiable($element) {
    if($loadMore.attr('noMore')) {
        return
    }
    let elementOffsetTop = $element.offset().top
    let windowHeight = $(window).height()
    let scrollTop = $(window).scrollTop()
    if((scrollTop + windowHeight >= elementOffsetTop)) {
        return true
    }
}

function checkNews() {
    if(isVisiable($loadMore)) {
        loadNews()
    }
}

loadNews()
$(window).on('scroll',function() {
    checkNews($loadMore)
})

function loadNews() {
    let $news = $('#news')
    $.ajax({
        method: 'get',
        url: '/getNews',
        data: {
            index: index
        }
    }).done(function(response) {
        if(response.status === 0) {
            appendHTML(response.data)
            index++
            checkNews($loadMore)
        } else {
            alert('获取失败')
        }
    }).fail(function() {
        alert('服务器异常')
    })
}

function appendHTML(data) {
    if(data.length === 0) {
        $loadMore.attr('noMore',true)
        $loadMore.css('visibility','visible')
        $loadMore.text('没有更多了')
        return
    }
    data.forEach(function(item) {
        $('#news').append(`<li>` +
        `<a href=`+ item.link +`>` +
            `<img src=` + item.img +` alt="">` +
            `<div class="message">` +
            `<h6>` + item.title + `</h6>` +
            `<p>` + item.brif + `</p>` +
        `</div>` +
        `</a>` +
        `</li>`)
    })
}