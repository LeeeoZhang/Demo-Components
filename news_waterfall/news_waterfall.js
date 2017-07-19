/* http://platform.sina.com.cn/slide/album_tech?jsoncallback=func&app_key=1271687855&num=3&page=4*/


let $container = $('#waterall')

//获取数据
function getDate(callback) {
    let num = 6
    let page = 0
    let url =  `http://platform.sina.com.cn/slide/album_tech?app_key=1271687855&num=${num}&page=${page}`
    $.ajax({
        url: url,
        method: 'get',
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function(response) {
        callback(response.data)
    }).fail(function(){
        alert('获取新闻出错')
    })
}

getDate(function(data){
    //dosomthing..

})


