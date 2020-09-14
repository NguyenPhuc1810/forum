$(document).ready(function(){
    $(".buttons button").click(function(){
        var part= $(this).attr('data') // Lấy data của thẻ button tương ứng
        position = $(part).offset().top; // Tìm vị trí của thẻ button
        $('html, body').animate({scrollTop: position},1700);
    });

    $("#gotoTop").hide()
    $(window).scroll(function(){
        var t=$(this).scrollTop()
        if(t>=100)
            $("#gotoTop").show(500)
        else
            $("#gotoTop").hide(500)
    });

    $("#gotoTop").click(function(){
        $('html, body').animate({scrollTop: 0},1200);
    })

    $(window).on('load', function(event) {
        $('body').removeClass('preloading');
        $('.load').delay(700).fadeOut('fast');
     });
    
});
