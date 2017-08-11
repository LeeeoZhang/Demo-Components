#! /usr/bin/env node
let request = require('request')
if(process.argv[2]) {
	request(`https://weixin.jirengu.com/weather/cityid?location=${process.argv[2]}`,function(error,response, body) {
		let cityId = JSON.parse(body).results[0].id
		let url = `https://weixin.jirengu.com/weather/now?cityid=${cityId}`
		request(url,function(error,response, body) {
			let data = JSON.parse(body)
			console.log('---------------------------')
			console.log(data.weather[0].city_name)
			console.log(`今天气温${data.weather[0].future[0].low}℃~${data.weather[0].future[0].high}℃ ${data.weather[0].future[0].text}`)
			console.log(`明天气温${data.weather[0].future[1].low}℃~${data.weather[0].future[1].high}℃ ${data.weather[0].future[1].text}`)
			console.log('---------------------------')
		})

	})
} else {
	request('https://weixin.jirengu.com/weather',function(error,response, body) {
		let data = JSON.parse(body)
		console.log('---------------------------')
		console.log(data.weather[0].city_name)
		console.log(`今天气温${data.weather[0].future[0].low}℃~${data.weather[0].future[0].high}℃ ${data.weather[0].future[0].text}`)
		console.log(`明天气温${data.weather[0].future[1].low}℃~${data.weather[0].future[1].high}℃ ${data.weather[0].future[1].text}`)
		console.log('---------------------------')
	})
}

