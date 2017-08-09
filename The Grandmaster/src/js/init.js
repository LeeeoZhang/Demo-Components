import $ from 'jquery'
import Waterfall from './waterFall.js'
import Carousel from './Carousel.js'
import BindEvent from './BindEvent.js'
import '../css/index_css.css'

let $goTopButton = $('#gotop')
let $nav = $('#nav')
let $waterFallCt = $('#still .post')
let $loadButtom = $('#still .load')
new BindEvent($goTopButton, $nav)
new Waterfall($waterFallCt, $loadButtom)
new Carousel($('#header .carousel'), $('#header .button-pre'), $('#header .button-next'), $('#header .nav'))
