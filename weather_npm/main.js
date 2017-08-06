// !# /usr/bin/env node
let request = require('request')
request('https://weixin.jirengu.com/weather',function(error,response, body) {
	console.log(body)
})
