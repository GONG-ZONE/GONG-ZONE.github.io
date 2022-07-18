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


//slide1
    // $("#slide1 .display li").eq(1).css("left","1000px").end().eq(2).css("left","2000px");
    // var s1 = 0
    // $("#slide1 .left").click(function(){
    //     $("#slide1 .display li").css("z-index","2").animate({"left":"-=1000px"},500).eq(s1).css("z-index","1").animate({"left":"2000px"},500);
    //     s1++;
    //     if(s1 == 3)s1 = 0;
    //     $("#slide1 .rotate li").eq(s1).children("a").animate({"opacity":".5"},500).end().siblings().children("a").animate({"opacity":".15"},500);
    // });
    // $("#slide1 .right").click(function(){
    //     if(s1 == 0)s1 = 2;
    //     else if(s1 == 1)s1 = 0;
    //     else s1 = 1;
    //     $("#slide1 .display li").css("z-index","2").animate({"left":"+=1000px"},500).eq(s1).css("z-index","1").animate({"left":"-1000px"},500);
    //     s1--;
    //     if(s1 == -1)s1 = 2;
    //     $("#slide1 .rotate li").eq(s1).children("a").animate({"opacity":".5"},500).end().siblings().children("a").animate({"opacity":".15"},500);
    // });




//slide2
    var s = 0;
    $("#slide2 .display li").eq(1).css("left","1000px").end().eq(2).css("left","2000px");
    // $("#slide2 .left").click(function(){
    //     s++;
    //     if(s == 3)s = 0;
    //     $("#slide1 .display li").css("z-index","2").animate({"left":"-=1000px"},500);
    //     $("#slide1 .display li").eq(s).css("z-index","1").animate({"left":"2000px"},500);
    // });
    // $("#slide2 .right").click(function(){
    //     if(s == 3)s = 0;
    //     else if(s == 4)s = 1;
    //     else s = 2;
    //     $("#slide2 .display li").css("z-index","2").animate({"left":"+=1000px"},500);
    //     $("#slide2 .display li").eq(s).css("z-index","1").animate({"left":"-1000px"},500);
    //     s++;
    // });
    setInterval(function(){
        $("#slide2 .display li").css("z-index","2").animate({"left":"-=1000px"},500);
        $("#slide2 .display li").eq(s).css("z-index","1").animate({"left":"2000px"},500);
        s++;
        if(s == 3)s = 0;
        $("#slide2 .rotate li").eq(s).children("a").animate({"opacity":".5"},500).end().siblings().children("a").animate({"opacity":".15"},500);
    },2500)



//fade2
    var f = 1;
    $("#fade2 .display li:first").siblings().hide();
    setInterval(function(){
        $("#fade2 .display li").eq(f).fadeIn(500).siblings().fadeOut(500);
        $("#fade2 .rotate li").eq(f).children("a").animate({"opacity":".5"},500).end().siblings().children("a").animate({"opacity":".15"},500);
        f++;
        if(f==3)f=0;
    },2500)


})