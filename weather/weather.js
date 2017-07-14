








$(document).ready(function() {

    getCity()

    //获取当前日期
    let nowDay = new Date()
    $('#message>p:nth-of-type(2)').text('0' + (nowDay.getMonth() + 1) + '月' + nowDay.getDate() + '日')

    getWeather()

})

//获取城市数据
function getCity() {
    let url = "https://jirenguapi.applinzi.com/city.php"
    $.get(url)
        .done(function(cityData) {
            $('#message span').text(cityData)
        }).fail(function() {
        alert('获取城市出错')
    })
}


//获取天气数据
function getWeather(city) {
    let url
    let nowDay = new Date()
    if(city === undefined) {
         url = "https://jirenguapi.applinzi.com/weather.php"
    } else {
        url = "https://jirenguapi.applinzi.com/weather.php" + "?city=" + city
    }
    $.get(url)
        .done(function(data) {
            let weatherData =JSON.parse(data).results[0].weather_data  //4个天气对象
            console.log(weatherData)
            weatherData.forEach(function(item,index) {
                $('#main-content>li').eq(index).children().eq(0).text('0' + (nowDay.getMonth() + 1) + '月' + (nowDay.getDate() +index) + '日')
                $('#main-content>li').eq(index).children().eq(1).text(item.temperature)
                $('#main-content>li').eq(index).children().eq(3).text(item.weather)
                if(/[\u4e91]/.test(item.weather)) {
                    $('#main-content>li').eq(index).children().eq(2).children().attr('xlink:href','#icon-icon-test1')
                } else if(/[\u96e8]/.test(item.weather)) {
                    $('#main-content>li').eq(index).children().eq(2).children().attr('xlink:href','#icon-icon-test4')
                } else {
                    $('#main-content>li').eq(index).children().eq(2).children().attr('xlink:href','#icon-sun')
                }
            })
        }).fail(function() {
        alert('获取天气失败')
    })
}
