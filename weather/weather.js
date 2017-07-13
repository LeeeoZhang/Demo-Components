








$(document).ready(function() {

    //获取城市数据
    $.get("http://jirenguapi.applinzi.com/city.php")
     .done(function(cityData) {
         $('#message span').text(cityData)
     }).fail(function() {
         alert('获取城市出错')
    })

    //获取当前日期
    let nowDay = new Date()
    console.log(nowDay)
    $('#message>p:nth-of-type(2)').text(nowDay.getMonth() + 1 + '月' + nowDay.getDate() + '日')

    //获取天气数据
    $.get('https://jirenguapi.applinzi.com/weather.php')
     .done(function(weatheData) {
         console.log(JSON.parse(weatheData))
     })

})



/*http://jirenguapi.applinzi.com/city.php*/
/*http://jirenguapi.applinzi.com/weather.php?city=北京*/

/*https://api.seniverse.com/v3/weather/daily.json?key=1hnawhehgdkq4nhl&location=beijing&language=zh-Hans&unit=c&start=0&days=5*/