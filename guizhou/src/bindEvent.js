import $ from 'jquery'

export default function bindEvent () {
    let $page6 = $('.page6'),
        $page7 = $('.page7'),
        $page6Dialog = $('.page6-dialog'),
        $page7Dialog = $('.page7-dialog'),
        $professorBtn = $('.page6>.content5'),
        $page7ConfirmBtn = $('.page7 img[alt=button1]'),
        $page7ShareBtn = $('.page7 img[alt=button2]'),
        $page6DialogCloseBtn = $('.page6-dialog img[alt=close]'),
        $page7DialogBackBtn = $('.page7-dialog img[alt=back]'),
        $page7DialogConfirmBtn = $('.page7-dialog img[alt=confirm]'),
        $answer1YesRadio = $('.page7-dialog .answer1 input[id=yes]'),
        $answer1NoRadio = $('.page7-dialog .answer1 input[id=no]'),
        $answer2 = $('.page7-dialog .answer2')


    $professorBtn.on('click', function () {
        $page6Dialog.removeClass('hide')
    })
    $page6DialogCloseBtn.on('click', function () {
        $page6Dialog.addClass('hide')
    })
    $page7ConfirmBtn.on('click', function () {
        $page7Dialog.removeClass('hide')
    })
    $page7DialogBackBtn.on('click', function () {
        $page7Dialog.addClass('hide')
    })
    $answer1YesRadio.on('change',function(){
        $answer2.removeClass('hide')
    })
    $answer1NoRadio.on('change',function(){
        $answer2.addClass('hide')
    })
    $page7DialogConfirmBtn.on('click',function(){
        let $page7DialogInputs = $('.page7-dialog input:checked,.page7-dialog input[type=text]')
        $page7DialogInputs.each(function(){
            console.log($(this).val())
        })
    })
}