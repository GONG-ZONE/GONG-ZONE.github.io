$(function(){
    /*
    setInterval(function(){
        var i = $(".nav").scrollTop();
        console.log(i);
        var j = $(".nav a").Top();

        if(j == 170)$(this).css("font-size","20px");
        
    },);
    */

    setInterval(function(){
        var i = $(document).scrollTop();
        if(i >= 200)$(".banner").addClass("add");
        else $(".banner").removeClass(".add");
    },)


})