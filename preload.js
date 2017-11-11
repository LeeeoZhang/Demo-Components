function preload(list, success, progress) {
	var length = list.length
	var n = 0
	var imageRegex = /\w+.png|jpg|gif|jpeg/
	var audioRegex = /\w+.mp3|mp4|/
	for (var i = 0; i < length; i++) {
		if (imageRegex.test(list[i])) {
			var image = new Image()
			image.onload = function() {
				n++
				progress && progress.call(null, (n / length) * 100)
				if (n === length) {
					success && success.call(null)
				}
			}
			image.src = list[i]
		} else if (audioRegex.test(list[i])) {
			var audio = new Audio()
			audio.onload = function() {
				n++
				progress && progress.call(null, (n / length) * 100)
				if (n === length) {
					success && success.call(null)
				}
			}
			audio.src = list[i]
		}
	}
}

export {
	preload
}