$(document).ready(function(){

  $("body>*>*").addClass("move");

  $(".move").mouseover(function(){
    var t = $(this);
    
    var z = Number(t.css("z-index"))%100;
    var w = t.outerWidth();
    var h = t.outerHeight();
    var osx = t.offset().left;
    var osy = t.offset().top;
    var clone = t.clone();
    
    t.on("mousedown",pick);
    t.on("mouseup",drop);

    function pick(e){
      t.css({"position":"absolute","z-index":"2"});
      t.after(clone);
      if(t.next().next().attr("class") == t.attr("class")) {t.next().remove();};
      t.next().css({"visibility":"hidden","left":osx,"top":osy});

      var margin = Number(t.css("margin-left").slice(0,-2));
      var popX = e.offsetX;
      var popY = e.offsetY;
      
      z = z + 100
      t.css("z-index",z);

      $(document).on("mousemove", drag);
      function drag(e){
        var x = e.clientX;
        var y = e.clientY;

        var a = x - popX;
        var b = y - popY;

        var width = $(document).width();
        var height = $(document).height();


        a <= 0 ? a = 0 : a = a;
        a >= width-w ? a = width-w : a = a;
        b <= 0 ? b = 0 : b = b;
        b >= height-h ? b = height-h : b = b;

        t.css({"left":a - margin,"top":b});
      };
    };

    function drop(){
      z = z%100;
      t.css("z-index",z);
      $(document).off("mousemove");
    };
  })
})