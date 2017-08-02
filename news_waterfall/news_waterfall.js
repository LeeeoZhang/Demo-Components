let Explosure = (function() {
    function _Explosure(waterFallCt,target,callback) {
        this.waterFallCt = waterFallCt
        this.target = target
        this.callback = callback
        this.canScroll = true
        this.num = 8
        this.page = 0
        this.getData()
        this.bind()
        this.columnHeights = [0,0,0]
    }
    _Explosure.prototype.getData = function() {
        if(!this.canScroll) return
        this.canScroll = false       //上锁，防止获取重复数据
        let url =  `https://platform.sina.com.cn/slide/album_tech?app_key=1271687855&num=${this.num}&page=${this.page}`
        $.ajax({
            url: url,
            method: 'get',
            dataType: 'jsonp',
            jsonp: 'jsoncallback'
        }).done((response) => {
            this.callback(response.data)    //获取数据成功执行回调函数
        }).fail(() => {
            alert('获取新闻出错')
        })
    }
    _Explosure.prototype.isShow = function() {
        return (window.innerHeight + window.scrollY) + 200 > target.offsetTop
    }
    _Explosure.prototype.bind = function() {
        let _this = this
        window.addEventListener('scroll',function() {
            if(_this.isShow()) {
                _this.getData()
            }
        })
    }
    _Explosure.prototype.makeNode = function(nodeData) {
        let div = document.createElement('div')
        let a = document.createElement('a')
        let img = document.createElement('img')
        let h4 = document.createElement('h4')
        let p = document.createElement('p')
        div.classList.add('new')
        a.setAttribute('href',nodeData.url)
        h4.innerText = nodeData.short_name
        p.innerText = nodeData.short_intro
        a.appendChild(img)
        a.appendChild(h4)
        a.appendChild(p)
        div.appendChild(a)
        return div
    }
    _Explosure.prototype.waterFall = function(node) {
        let styles = window.getComputedStyle(node);
        let marginHeight = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom'])
        let marginWidth = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom'])
        let nodeHeight = Math.ceil(node.offsetHeight + marginHeight)
        let nodeWidth = Math.ceil(node.offsetWidth + marginWidth)
        let minColumnHeight = Math.min.apply(null,this.columnHeights)
        let minColumnHeightIndex = this.columnHeights.indexOf(minColumnHeight)
        node.style.left = `${minColumnHeightIndex * nodeWidth}px`
        node.style.top = `${minColumnHeight}px`
        this.columnHeights[minColumnHeightIndex] += nodeHeight
        this.waterFallCt.style.height = `${Math.max.apply(null,this.columnHeights)}px`
    }
    return {
        init: function(waterFallCt,target,callback) {
            new _Explosure(waterFallCt,target,callback)
        }
    }
})()

let waterFallCt = document.querySelector('#waterfall'),
    target = document.querySelector('#load')

Explosure.init(waterFallCt,target,function(data){
    let _this = this
    data.forEach((item,index) => {
        let node = this.makeNode(item)
        let imgNode = node.querySelector('img')
        imgNode.addEventListener('load',function() {
            _this.waterFallCt.appendChild(node)
            _this.waterFall(node)
            _this.page++
            _this.canScroll = true
        })
        imgNode.setAttribute('src',item.img_url)
    })
})