$(document).ready(function(){

    $(window).scroll(function(){
        var i = $(document).scrollTop();
        if(i >= 200)$(".banner").addClass("add1").children("div").css("position","fixed");
        else $(".banner").removeClass("add1").children("div").css("position","absolute");
    });

/*
    $(".nav").scroll(function(){
        var i = $(".nav").scrollTop();
        for(n=0;n<20;n++){
        if(i<=n*60){
            $(".nav a").eq(n+3).addClass("add2");};
        }
    });
*/
    
    // $(document).click(function(){
    //     var n = $(document).scrollTop();
    //     var m = n+300;
    //     var set = setInterval(function(){
    //         $(document).scrollTop(n);
    //         n = n+3;
    //         if(n >= m) n = m;
    //         console.log(n +","+m);
    //         if(n >= m)clearInterval(set);
    //     },3);
    // })


    $(document).click(function(){
        $("html,body").animate({scrollTop:"+=100"},200);
    });
    
    $(".nav").scrollTop(540);
    $(".nav").scroll(function(){
        var i = $(".nav").scrollTop();
        var ap = $(".nav li:first").clone(true);
        var pre = $(".nav li:last").clone(true);
        console.log(i);
        if(i >= 700){
            $(".nav").append(ap);
            $(".nav li:first").remove();
        };
        if(i <= 500){
            $(".nav").prepend(pre);
            $(".nav li:last").remove();
        };
    });



})