








$(document).ready(function() {


    //获取城市数据
    $.get("https://jirenguapi.applinzi.com/city.php")
     .done(function(cityData) {
         $('#message span').text(cityData)
     }).fail(function() {
         alert('获取城市出错')
    })


    //获取当前日期
    let nowDay = new Date()
    $('#message>p:nth-of-type(2)').text('0' + (nowDay.getMonth() + 1) + '月' + nowDay.getDate() + '日')


    //获取天气数据
    $.get('https://jirenguapi.applinzi.com/weather.php')
     .done(function(data) {
         let weatherData =JSON.parse(data).results[0].weather_data//4个对象
         console.log(weatherData)
         weatherData.forEach(function(item,index) {
             $('#main-content>li').eq(index).children().eq(0).text('0' + (nowDay.getMonth() + 1) + '月' + (nowDay.getDate() +index) + '日')
             $('#main-content>li').eq(index).children().eq(1).text(item.temperature)
             if(/[\u4e91]/.test(item.weather)) {
                 $('#main-content>li').eq(index).children().eq(2).children().attr('xlink:href','#icon-icon-test1')
             } else if(/[\u96e8]/.test(item.weather)) {
                 $('#main-content>li').eq(index).children().eq(2).children().attr('xlink:href','#icon-icon-test4')
             } else {
                 $('#main-content>li').eq(index).children().eq(2).children().attr('xlink:href','#icon-sun')
             }
         })
     })




    //展示信息


})



/*http://jirenguapi.applinzi.com/city.php*/
/*http://jirenguapi.applinzi.com/weather.php?city=北京*/

/*https://api.seniverse.com/v3/weather/daily.json?key=1hnawhehgdkq4nhl&location=beijing&language=zh-Hans&unit=c&start=0&days=5*/