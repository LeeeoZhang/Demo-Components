define(['jquery'],function($) {
    let Waterfall = (function() {
        function _Waterfall($waterFallCt,$loadButtom) {
            this.$waterFallCt = $waterFallCt
            this.columnsHeight = [0,0,0]
            this.length = 3
            this.postNum = 1
            this.$loadButtom = $loadButtom
            this.makeNode()
            this.bind()
        }
        _Waterfall.prototype.renderPage = function($node) {
            let itemWidth = $node.outerWidth(true)
            let minColumn = Math.min.apply(null,this.columnsHeight)
            let minColumnIndex = this.columnsHeight.indexOf(minColumn)
            $node.css({
                left: minColumnIndex*itemWidth,
                top: minColumn
            })
            this.columnsHeight[minColumnIndex] += $node.outerHeight(true)
            this.$waterFallCt.css({
                height: Math.max.apply(null,this.columnsHeight)
            })
        }
        _Waterfall.prototype.makeNode = function() {
            let urlArray = this.makeDate()
            let _this = this
            urlArray.forEach(function(item,index) {
                let img = new Image()
                img.onload = function() {
                    let $node = $(`<div>
                                    <a target="_blank" href=${item.post}>` + img.outerHTML +
                        `<div class="iconCt">
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href="#icon-fangda"></use>
                                            </svg>
                                        </div>
                                    </a>
                                </div>`)
                    _this.$waterFallCt.append($node)
                    _this.renderPage($node)
                }
                img.src = item.minPost
            })
        }
        _Waterfall.prototype.makeDate = function() {
            let urlArray =[]
            for(let i = 0; i<this.length; i++) {
                urlArray.push({
                    post: `images/post/pic${this.postNum}.jpg`,
                    minPost: `images/post/min/min_pic${this.postNum}.png`
                })
                this.postNum++
            }
            return urlArray
        }
        _Waterfall.prototype.bind = function() {
            let _this = this
            _this.$loadButtom.on('click',function() {
                console.log(1)
                if(_this.postNum > 30) {
                    _this.$loadButtom.text("No More")
                    _this.$loadButtom.attr('disabled','true')
                    return
                }
                _this.makeNode()
            })
        }
        return {
            init: function($waterFallCt,$loadButtom) {
                new _Waterfall($waterFallCt,$loadButtom)
            }
        }
    })()
    return Waterfall
})