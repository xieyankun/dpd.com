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

})