import './style.scss'
import {Pages} from './Pages'
import $ from 'jquery'
import jqueryPreload from './jquery.imgpreload.js'
import {images} from './preloadList'
import {template} from './temp'


let percent,
    $percentCt = $('.preload>.percent'),
    $wrap1 = $('#wrap1')

document.body.addEventListener('touchmove',function(event){
    event.preventDefault()
})

jqueryPreload($)
$.imgpreload(images,{
    each: function(a){
        percent = Math.round((a.length/images.length)*100)
        $percentCt.text(`${percent}%`)
        if(percent === 100) {
            $('.preload').css({display: 'none'})
            $wrap1.append(template)
            $('.page1').removeClass('hide')
            Pages({
                startPage: 0,
                totalPages: 7
            })
        }
    }
})

