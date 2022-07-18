$(function(){

    $(window).scroll(function(){
        var i = $(document).scrollTop();
        if(i >= 200)$(".banner").addClass("add1").children("div").css("position","fixed");
        else $(".banner").removeClass("add1").children("div").css("position","absolute");
    });

    
    $(".nav").scroll(function(){
        var i = $(".nav").scrollTop();
        var n = 0;

        if(i<=n*60){
            $(".nav li").eq(n+2).children("a").removeClass("add2");
            $(".nav li").eq(n+3).children("a").addClass("add2");};
        
        n++;
        if(n = 20) n == 0;
    });




})