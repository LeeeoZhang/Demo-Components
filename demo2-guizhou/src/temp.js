let template = `    <div class="wrap2">
        <div class="page1-wrap">
            <div class="page1 page hide">
                <img src="./src/images/logo.png" alt="logo" class="logo">
                <p class="title1"><img src="./src/images/page1-title1.png" alt="title1"></p>
                <p class="title2"><img src="./src/images/page1-title2.png" alt="title2"></p>
                <p class="open"><img src="./src/images/open-now.png" alt="open"></p>
            </div>
        </div>
        <div class="page2-wrap">
            <div class="page2 page hide">
                <img src="./src/images/page2-logo.png" alt="page2-logo" class="logo">
                <p class="title"><img src="./src/images/page2-title.png" alt="page2-title/"></p>
                <p class="content"><img src="./src/images/page2-content.png" alt="page2-content"></p>
            </div>
        </div>
        <div class="page3-wrap">
            <div class="page3 page hide">
                <img src="./src/images/page3-title1.png" alt="title1" class="title1">
                <p class="title2"><img src="./src/images/page3-title2.png" alt="title2"></p>
                <p class="content"><img src="./src/images/page3-content.png" alt="content"></p>
            </div>
        </div>
        <div class="page4-wrap">
            <div class="page4 page hide">
                <p class="title"><img src="./src/images/page4-title.png" alt=""></p>
                <p class="content3"><img src="./src/images/page4-content3.png" alt=""></p>
                <img src="./src/images/page4-content1.png" alt="" class="content1">
                <img src="./src/images/page4-content2.png" alt="" class="content2">
                <img src="./src/images/page4-icon.png" alt="" class="icon">
            </div>
        </div>
        <div class="page5-wrap">
            <div class="page5 page hide">
                <img src="./src/images/page5-title.png" alt="title" class="title">
                <p class="content"><img src="./src/images/page5-content.png" alt="content"></p>
            </div>
        </div>
        
        <div class="page6-wrap">
            <div class="page6 page hide">
                <p class="title"><img src="./src/images/page6-title.png" alt="title"></p>
                <p class="content content1"><img src="./src/images/page6-content1.png" alt=""></p>
                <p class="content content2"><img src="./src/images/page6-content2.png" alt=""></p>
                <p class="content content3"><img src="./src/images/page6-content3.png" alt=""></p>
                <p class="content content4"><img src="./src/images/page6-content4.png" alt=""></p>
                <p class="content content5">
                    <img src="./src/images/page6-content5.png" alt="">
                    <img src="./src/images/page6-finger.png" alt="finger" class="finger">
                </p>
                <p class="content content6">
                    <img src="./src/images/page6-content6.png" alt="">
                </p>
            </div>
        </div>
        
        <div class="page7-wrap">
            <div class="page7 page hide">
                <p class="title"><img src="./src/images/page7-title.png" alt="title"></p>
                <p class="step1 step"><img src="./src/images/page7-step1.png" alt="step1"></p>
                <p class="step2 step"><img src="./src/images/page7-step2.png" alt="step2"></p>
                <p class="step3 step"><img src="./src/images/page7-step3.png" alt="step3"></p>
                <p class="tips"><img src="./src/images/page7-tips.png" alt="tips"></p>
                <p class="action-group">
                    <img src="./src/images/page7-button1.png" alt="button1">
                    <img src="./src/images/page7-button2.png" alt="button2">
                </p>
            </div>
        </div>
    </div>
    <div class="arrow">
        <img src="./src/images/arrow.png" alt="arrow">
    </div>
    <div class="page6-dialog hide">
        <img src="./src/images/page6-1-content.png" alt="">
        <img src="./src/images/page6-1-close.png" alt="close">
    </div>
    <div class="page7-dialog hide">
        <p class="title"><img src="./src/images/page7-1-title.png" alt="title"></p>
        <div class="form">
            <input type="text" class="name">
            <input type="text" class="tel">
            <input type="text" class="address">
            <input type="text" class="email">
        </div>
        <div class="choose-box">
            <div class="years">
                <p>病龄</p>
                <div class="choose-button">
                    <input type="radio" name="years" id="one" value="1年以内">
                    <label for="one">1年以内</label>
                    <input type="radio" name="years" id="two" value="1-3年">
                    <label for="two">1-3年</label>
                    <input type="radio" name="years" id="three" value="3-5年">
                    <label for="three">3-5年</label>
                    <input type="radio" name="years" id="four" value="5-10年">
                    <label for="four">5-10年</label>
                    <input type="radio" name="years" id="five" value="10年以上">
                    <label for="five">10年以上</label>
                </div>
            </div>
            <div class="description">
                <p>是否已引发糖尿病并发症</p>
                <div class="choose-button">
                    <div class="answer1">
                        <input type="radio" id="yes" name="answer" value="是">
                        <label for="yes">是</label>
                        <input type="radio" id="no" name="answer" value="否">
                        <label for="no">否</label>
                    </div>
                    <div class="answer2 hide">
                       ( <input type="radio" name="description" id="answer2-one" value="糖足">
                        <label for="answer2-one">糖足</label>
                        <input type="radio" name="description" id="answer2-two" value="糖网>
                        <label for="answer2-two">糖网</label>
                        <input type="radio" name="description" id="answer2-three" value="其他>
                        <label for="answer2-three">其他</label>
                        <input type="radio" name="description" id="answer2-four" value="糖尿病周围神经性病变">
                        <label for="answer2-four">糖尿病周围神经性病变</label> )
                    </div>
                </div>
            </div>
        </div>
        <div class="action-group">
            <img src="./src/images/page7-1-button1.png" alt="confirm">
            <img src="./src/images/page7-1-button2.png" alt="back">
        </div>
        <p class="contact">
            <img src="./src/images/page7-1-tel.png" alt="contact">
        </p>
    </div>`

export {template}