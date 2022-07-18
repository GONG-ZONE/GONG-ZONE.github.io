$(document).ready(function(){

// ---- 브라우저 크기가 변경되었을 때 ------------------------------------------------------------
  $(window).resize(function(){

    var
    wi = $(window).width(), // 브라우저 폭
    he = $(window).height(), // 브라우저 높이
    wn = Math.ceil(wi/48), // 가로에 들어갈 상자 개수
    hn = Math.ceil(he/48), // 세로에 들어갈 상자 개수
    max = wn*hn-1; // 마지막 상자의 인덱스 번호
    
    var
    wc = Math.floor(wn/2), // 카피라이트 가로 기준
    hc = Math.floor(hn/2), // 카피라이트 세로 기준
    point = (hc-1)*wn+wc-1; // 카피라이트 기준
    
    $("#back>.effect").contents().remove("ul");

// ---- 타일 만들기 -----------------------------------------------------------------------------------
    for(var k = 0 ; k <= max ; k++) {
      $("#back>.effect").append("<ul><li></li></ul>");
    };
    for(var k = 0 ; k <= 99 ; k++) {
      $("#back>.raintoup").append("<div></div>");
      $("#back>.raintodown").append("<div></div>");
      $("#back>.raintoleft").append("<div></div>");
      $("#back>.raintoright").append("<div></div>");
    };

// ---- 카피라이트 쓰기 ---------------------------------------------------------------------------------
    if(wi >= 768){
      $("#back>.effect>ul")
      .eq(point-5).children("li").html("<li>CO</li>").end().end()
      .eq(point-4).children("li").html("<li>PY</li>").end().end()
      .eq(point-3).children("li").html("<li>RI</li>").end().end()
      .eq(point-2).children("li").html("<li>GH</li>").end().end()
      .eq(point-1).children("li").html("<li>T&nbsp;&nbsp;&nbsp;</li>").end().end()
      .eq(point).children("li").html("<li>20</li>").end().end()
      .eq(point+1).children("li").html("<li>19</li>").end().end()
      .eq(point+2).children("li").html("<li>&nbsp;&nbsp;&nbsp;G</li>").end().end()
      .eq(point+3).children("li").html("<li>ON</li>").end().end()
      .eq(point+4).children("li").html("<li>GZ</li>").end().end()
      .eq(point+5).children("li").html("<li>ON</li>").end().end()
      .eq(point+6).children("li").html("<li>E&nbsp;&nbsp;&nbsp;</li>");
      
      $("#back>.effect>ul")
      .eq(point-4+wn).children("li").html("<li>Al</li>").end().end()
      .eq(point-3+wn).children("li").html("<li>L&nbsp;&nbsp;&nbsp;</li>").end().end()
      .eq(point-2+wn).children("li").html("<li>RI</li>").end().end()
      .eq(point-1+wn).children("li").html("<li>GH</li>").end().end()
      .eq(point+wn).children("li").html("<li>TS</li>").end().end()
      .eq(point+1+wn).children("li").html("<li>&nbsp;&nbsp;&nbsp;R</li>").end().end()
      .eq(point+2+wn).children("li").html("<li>ES</li>").end().end()
      .eq(point+3+wn).children("li").html("<li>ER</li>").end().end()
      .eq(point+4+wn).children("li").html("<li>VE</li>").end().end()
      .eq(point+5+wn).children("li").html("<li>D&nbsp;&nbsp;&nbsp;</li>");
    } else {
      $("#back>.effect>ul")
      .eq(point-4*wn).children("li").html("<li>C<br>O</li>").end().end()
      .eq(point-3*wn).children("li").html("<li>P<br>Y</li>").end().end()
      .eq(point-2*wn).children("li").html("<li>R<br>I</li>").end().end()
      .eq(point-wn).children("li").html("<li>G<br>H</li>").end().end()
      .eq(point).children("li").html("<li>T<br>&nbsp;</li>").end().end()
      .eq(point+wn).children("li").html("<li>2&nbsp;&nbsp;0<br>1&nbsp;&nbsp;9</li>").end().end()
      .eq(point+2*wn).children("li").html("<li>&nbsp;<br>G</li>").end().end()
      .eq(point+3*wn).children("li").html("<li>O<br>N</li>").end().end()
      .eq(point+4*wn).children("li").html("<li>G<br>Z</li>").end().end()
      .eq(point+5*wn).children("li").html("<li>O<br>N</li>").end().end()
      .eq(point+6*wn).children("li").html("<li>E<br>&nbsp;</li>");
      
      $("#back>.effect>ul")
      .eq(point+1-4*wn).children("li").html("<li>A<br>L</li>").end().end()
      .eq(point+1-3*wn).children("li").html("<li>L<br>&nbsp;</li>").end().end()
      .eq(point+1-2*wn).children("li").html("<li>R<br>I</li>").end().end()
      .eq(point+1-wn).children("li").html("<li>G<br>H</li>").end().end()
      .eq(point+1).children("li").html("<li>T<br>S</li>").end().end()
      .eq(point+1+wn).children("li").html("<li>&nbsp;<br>R</li>").end().end()
      .eq(point+1+2*wn).children("li").html("<li>E<br>S</li>").end().end()
      .eq(point+1+3*wn).children("li").html("<li>E<br>R</li>").end().end()
      .eq(point+1+4*wn).children("li").html("<li>V<br>E</li>").end().end()
      .eq(point+1+5*wn).children("li").html("<li>D<br>&nbsp;</li>");
    }

// ---- 마우스 올렸을 때 타일 뒤집어지고 0.7초후에 다시 뒤집어지기 ----------------------------------------
    $("#back>.effect>ul").mouseover(function(){
      var i = $(this).index();
      $("#back>.effect>ul").eq(i).children("li").addClass("open").removeClass("close");
      setTimeout(function(){
        $("#back>.effect>ul").eq(i).children("li").addClass("close").removeClass("open");
      },700);
    });

  // ---- 타일 클릭했을 때 퍼져나가면서 뒤집어지기 ---------------------------------------------------------
    $("#back>.effect>ul").click(function(){
      // ---- 타일을 클릭했을 때 아직 뒤집어지지 않은 타일들이 마우스오버로 뒤집어지지 않도록 레이어 층을 생성 ------------------
      $("#back>.wall").show();
      $("#back>.wall_sub").show();

      var i = $(this).index();
      setTimeout(function(){ // ---- 마우스오버된 이미지들이 0.7초 동안 움직이며 addClass("open")이 먹히지 않는것을 방지 -----
        $("#back>.effect>ul").eq(i).children("li").addClass("open");
      
        // ---- 상하좌우로 퍼져나가며 뒤집어지기 -----------------------------
        var n = i, e = i, s = i, w = i;
        var int = setInterval(function(){
        
          n -= wn; e += 1; s += wn; w -= 1;
          if(n < 0){n += wn}; // 반대편으로 인덱스값이 넘어가지 않게 함
          if(e%wn == 0 || e == max + 1){e -= 1};
          if(s > max){s -= wn};
          if(w%wn == wn-1 || w == -1){w += 1};

          $("#back>.effect>ul").eq(n).children("li").addClass("open").end().end()
          .eq(e).children("li").addClass("open").end().end()
          .eq(s).children("li").addClass("open").end().end()
          .eq(w).children("li").addClass("open");

          // ----좌우로 퍼져나가며 뒤집어지는 타일의 위아래 타일 뒤집어지기 ----------------
          var eu = e, ed = e, wu = w, wd = w;
          setInterval(function(){
            eu -= wn; ed += wn; wu -= wn; wd += wn;
            if(eu < 0){eu = -(max + 2)}; // 반대편으로 인덱스값이 넘어가지 않게 함, -1~-(max+1) 값으로 하면 eq인덱스값이 거꾸로 먹는 버그발생 ----
            if(ed > max){ed = max + 1};
            if(wu < 0){wu = -(max + 2)};
            if(wd > max){wd = max + 1};

            $("#back>.effect>ul").eq(eu).children("li").addClass("open").end().end()
            .eq(ed).children("li").addClass("open").end().end()
            .eq(wu).children("li").addClass("open").end().end()
            .eq(wd).children("li").addClass("open");
          },10)

          // ---- 모든 타일이 뒤집어지면 setInterval 끝내기 ------------------
          var
          lt = $("#back>.effect>ul").eq(0).children("li").css("opacity"),
          tr = $("#back>.effect>ul").eq(wn-1).children("li").css("opacity"),
          rb = $("#back>.effect>ul").eq(max).children("li").css("opacity"),
          bl = $("#back>.effect>ul").eq(max - wn + 1).children("li").css("opacity");
          if(lt + tr + rb + bl == 0){
            clearInterval(int);
            $("#back>.effect").hide();

            // ---- .title과 선 애니메이션 --------------------------------------------------------------------------------------
            $("#back>.title_box>.title")
              .children(".up_lt").delay(100).animate({top:"-11.5%"},2000).end()
              .children(".down_lt").delay(200).animate({bottom:"73.5%"},1500).end()
              .children(".left_lt").delay(500).animate({left:"-8.5%"},3000).end()
              .children(".right_lt").animate({right:"67%"},6000).end()
              .children(".up_br").delay(300).animate({top:"88.5%"},1500).end()
              .children(".down_br").animate({bottom:"-2.8%"},4000).end()
              .children(".left_br").delay(500).animate({left:"84.5%"},3200).end()
              .children(".right_br").delay(200).animate({right:"-2.5%"},2000);
            $("#back>.title_box>.title>.word").fadeIn(3500);

            // ---- 사방으로 움직이는 선 만들기 -----------------------------------------------------------------------------------
            // ---- 아래에서 위 방향 -----------
            setInterval(function(){
              setTimeout(function(){
                var a = Math.random(), aa = Math.floor(a*10), b = a*10-aa, bb = Math.floor(b*10), c = b*10-bb, cc = Math.floor(c*10), d = c*10-cc, idx = Math.floor(a*99), width = $(window).width();
                $("#back>.raintoup>div").eq(idx).css("bottom","-50%").css("left",Math.floor(a*width)).css("height",Math.floor(b*2+10) + "%").css("opacity",c/30 + 0.2).animate({bottom:"150%"},Math.floor(d*4500)+1500);
              },2000)
            },2579)
            // ---- 위에서 아래 방향 -----------
            setInterval(function(){
              setTimeout(function(){
                var a = Math.random(), aa = Math.floor(a*10), b = a*10-aa, bb = Math.floor(b*10), c = b*10-bb, cc = Math.floor(c*10), d = c*10-cc, idx = Math.floor(a*99), width = $(window).width();
                $("#back>.raintodown>div").eq(idx).css("top","-50%").css("left",Math.floor(a*width)).css("height",Math.floor(b*2+10) + "%").css("opacity",c/30 + 0.2).animate({top:"150%"},Math.floor(d*4500)+1500);
              },2000)
            },3851)
            // ---- 오른쪽에서 왼쪽 방향 -----------
            setInterval(function(){
              setTimeout(function(){
                var a = Math.random(), aa = Math.floor(a*10), b = a*10-aa, bb = Math.floor(b*10), c = b*10-bb, cc = Math.floor(c*10), d = c*10-cc, idx = Math.floor(a*99), height = $(window).height();
                $("#back>.raintoleft>div").eq(idx).css("right","-50%").css("top",Math.floor(a*height)).css("width",Math.floor(b*2+10) + "%").css("opacity",c/30 + 0.2).animate({right:"150%"},Math.floor(d*4500)+1500);
              },2000)
            },2168)
            // ---- 왼쪽에서 오른쪽 방향 -----------
            setInterval(function(){
              setTimeout(function(){
                var a = Math.random(), aa = Math.floor(a*10), b = a*10-aa, bb = Math.floor(b*10), c = b*10-bb, cc = Math.floor(c*10), d = c*10-cc, idx = Math.floor(a*99), height = $(window).height();
                $("#back>.raintoright>div").eq(idx).css("left","-50%").css("top",Math.floor(a*height)).css("width",Math.floor(b*2+10) + "%").css("opacity",c/30 + 0.2).animate({left:"150%"},Math.floor(d*4500)+1500);
              },2000)
            },3327)

            // ---- 클릭하여 색 바꾸기 -------------
            var z = 2;
            $("#back>.wall, #back>.wall_sub").click(function(){
              var a = Math.random(), aa = Math.floor(a*10), b = a*10-aa, bb = Math.floor(b*10), c = b*10-bb, cc = Math.floor(c*10), d = c*10-cc, dd = Math.floor(d*10);
              var color = "rgb(" + Math.floor(a*255) + "," + Math.floor(b*255) + "," + Math.floor(c*255) + ")";  
              
              if(z%2 == 0){
                $("#back>.wall").stop().animate({opacity:"0"},1000);
                $("#back>.wall_sub").css("background-color",color).stop().animate({opacity:dd*4/100+0.2},1000);
              }
              if(z%2 == 1){
                $("#back>.wall_sub").stop().animate({opacity:0},1000);
                $("#back>.wall").css("background-color",color).stop().animate({opacity:dd*4/100+0.2},1000);
              }
              z++;
            });
  
            // ---- .wall이나 .wall_sub를 더블클릭하면 Intro 벗어나기 ----------------
            $("#back>.wall, #back>.wall_sub").dblclick(function(){
              $(".wall_next").show().stop().animate({opacity:1},500);
              setTimeout(function(){
                location.href = "http://gongzone.dothome.co.kr/practice/A000";
              },500)
            });
          }
        },10)
      },700);
    });
  });
})