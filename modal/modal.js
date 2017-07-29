let Modal = (function() {
    function _Modal(button,modalCt,tipsCt) {
        this.button = button
        this.tipsCt = tipsCt
        this.modalCt = modalCt
        this.bind()
    }
    _Modal.prototype.$ = function(element,selector) {
        return element.querySelector(selector)
    }
    _Modal.prototype.$$ = function(element,selector) {
        return element.querySelectorAll(selector)
    }
    _Modal.prototype.show = function() {
        this.modalCt.classList.remove('hidden')
        this.modalCt.classList.add('show')
    }
    _Modal.prototype.hidden = function() {
        this.modalCt.classList.remove('show')
        this.modalCt.classList.add('hidden')
    }
    _Modal.prototype.bind = function() {
        let _this = this
        let close = _this.$(_this.tipsCt,'h3>a')
        let enter = _this.$(_this.tipsCt,'.enter')
        let cancle = _this.$(_this.tipsCt,'.cancle')
        this.button.addEventListener('click',function() {
            _this.show()
        })
        close.addEventListener('click',function(e) {
            console.log(0)
            e.preventDefault();
            _this.hidden();
        })
        _this.modalCt.addEventListener('click',function(e) {
            e.preventDefault();
            _this.hidden();
        })
        _this.tipsCt.addEventListener('click',function(e) {
            e.stopPropagation();
        })
        enter.addEventListener("click",function(e) {
            e.preventDefault();
            _this.hidden();
        })
        cancle.addEventListener("click",function(e) {
            e.preventDefault();
            _this.hidden();
        })
    }
    return {
        init: function(button,modalCt,tipsCt) {
            new _Modal(button,modalCt,tipsCt)
        }
    }
})()

let button = document.querySelector("#click"),
    tipsCt = document.querySelector(".tips"),
    modalCt = document.querySelector(".container")

Modal.init(button,modalCt,tipsCt)




