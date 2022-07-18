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

//slide
    var s = 0;
    $(".slide li").eq(1).css("left","1000px").end().eq(2).css("left","2000px");
    $(".left").click(function(){
        s++;
        if(s == 3)s = 0;
        $(".slide li").css("z-index","2").animate({"left":"-=1000px"},500);
        $(".slide li").eq(s).css("z-index","1").animate({"left":"2000px"},500);
    });
    $(".right").click(function(){
        if(s == 3)s = 0;
        else if(s == 4)s = 1;
        else s = 2;
        $(".slide li").css("z-index","2").animate({"left":"+=1000px"},500);
        $(".slide li").eq(s).css("z-index","1").animate({"left":"-1000px"},500);
        s++;
    });
    setInterval(function(){
        $(".slide li").css("z-index","2").animate({"left":"-=1000px"},500);
        $(".slide li").eq(s).css("z-index","1").animate({"left":"2000px"},500);
        s++;
        if(s == 3)s = 0;
    },2500)



//fade
    var f = 1;
    $(".fade li:first").siblings().hide();
    setInterval(function(){
        $(".fade li").eq(f).fadeIn(500).siblings().fadeOut(500);
        f++;
        if(f==3)f=0;
    },2500)


})