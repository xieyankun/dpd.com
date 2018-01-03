$(function(){
    var flag = 1
    $('.m-menu').click(function(){
        if (flag) {
            $('.menu').show();
            flag = 0
        }else{
            $('.menu').hide();
            flag = 1
        }
    })
    var index = $('.menu li').index($('m-active'))
    console.log('index', index)
    
    // $(".menu li a").mouseenter(function(){
    //     console.log($('.menu li').index())

    //     $(this).addClass('m-active')
    // });
    // $(".menu li a").mouseleave(function(){
    //     console.log('menu')
    //     $(this).removeClass('m-active')
    // });
    $(".divisions").mouseenter(function(){
        console.log('0000')
        $('.d-menu').show();
    });
    $(".divisions").mouseleave(function(){
        console.log('1111')
        $('.d-menu').hide();
    });
})