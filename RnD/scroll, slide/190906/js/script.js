$(document).ready(function(){

    $(window).scroll(function(){
        var i = $(document).scrollTop();
        if(i >= 200)$(".banner").addClass("add1").children("div").css("position","fixed");
        else $(".banner").removeClass("add1").children("div").css("position","absolute");
    });

//scroll
    $(".logo").click(function(){
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



// slide1
    $("#slide1").children(".right").click(function(){

    })

































//slide2
    var s = 0;
    $("#slide2 .display a").eq(1).css("left","1000px").end().eq(2).css("left","2000px");
    setInterval(function(){
        $("#slide2 .display a").css("z-index","2").animate({"left":"-=1000px"},500);
        $("#slide2 .display a").eq(s).css("z-index","1").animate({"left":"2000px"},500);
        s++;
        if(s == 3)s = 0;
        $("#slide2 .rotate a").eq(s).animate({"opacity":".5"},500).siblings().animate({"opacity":".15"},500);
    },2500)







// fade1















































//fade2
    var f = 1;
    $("#fade2 .display a:first").siblings().hide();
    setInterval(function(){
        $("#fade2 .display a").eq(f).fadeIn(500).siblings().fadeOut(500);
        $("#fade2 .rotate a").eq(f).animate({"opacity":".5"},500).siblings().animate({"opacity":".15"},500);
        f++;
        if(f==3)f=0;
    },2500)


})