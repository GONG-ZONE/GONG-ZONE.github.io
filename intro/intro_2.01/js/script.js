(function(){
    const config = {
        star: {
            length: {
                custom: null,
                min: 0,
                max: 0,
            },
            opacity: {
                custom: null,
                min: 0,
                max: 0,
            },
            narrow: {
                custom: null,
                min: 0,
                max: 0,
            },
            interval: {
                custom: null,
                min: 0,
                max: 0,
            },
            speed: {
                custom: null,
                min: 0,
                max: 0,
            },

            init: function(key) {
                if(!key || key == 'length') {
                    this.length.custom = false;
                    this.length.min = 10;
                    this.length.max = 47;
                }
                if(!key || key == 'opacity') {
                    this.opacity.custom = false;
                    this.opacity.min = 0.1;
                    this.opacity.max = 0.3;
                }
                if(!key || key == 'narrow') {
                    this.narrow.custom = false;
                    this.narrow.min = 1;
                    this.narrow.max = 1;
                }
                if(!key || key == 'interval') {
                    this.interval.custom = false;
                    this.interval.min = 4000;
                    this.interval.max = 8000;
                }
                if(!key || key == 'speed') {
                    this.speed.custom = false;
                    this.speed.min = 1000;
                    this.speed.max = 6000;
                }
            },

            control: function(data) {
                for(i in data) {
                    console.log(`${i} : ${data[i]}`);
                }
            }
        },

        init: function() {
            this.star.init();
        }
    }

    const pixel = {
        status: true,

        winWidth: 0,
        winHeight: 0,
    
        ulCnt: 0,
        liCnt: 0,
        ulHalf: 0,
        liHalf: 0,
    
        wrapWidth: 0,
        wrapHeight: 0,
    },
    
    copyrightH = ['CO','PY','RI','GH','T&nbsp;&nbsp;&nbsp;','20','22','&nbsp;&nbsp;&nbsp;G','ON','GZ','ON','E&nbsp;&nbsp;&nbsp;'],
    reservedH = ['','AL','L&nbsp;&nbsp;&nbsp;','RI','GH','TS','&nbsp;&nbsp;&nbsp;R','ES','ER','VE','D&nbsp;&nbsp;&nbsp;',''],
    copyrightV = ['C<br>O','P<br>Y','R<br>I','G<br>H','T<br>','20<br>22','<br>G','O<br>N','G<br>Z','O<br>N','E<br>'],
    reservedV = ['A<br>L','L<br>','R<br>I','G<br>H','T<br>S','<br>R','E<br>S','E<br>R','V<br>E','D<br>',''],
    
    horizontalError = ['TO','O&nbsp;&nbsp;&nbsp;','SM','AL','L&nbsp;&nbsp;&nbsp;','SC','RE','EN'],
    verticalError1 = ['T<br>O','O<br>','S<br>M','A<br>L','L<br>'],
    verticalError2 = ['S<br>C','R<br>E','E<br>N'];
        
    let htmlText = '',
        effect;

    $(document).ready(function(){
        config.init();
        mouseEffectBack();
        mouseMove();
        clickEffect();
        titleResize();
    })

    $(window).resize(function(){
        if(pixel.status) mouseEffectBack();
        titleResize();
    })
    
    function mouseEffectBack() {
        pixel.winWidth = window.innerWidth;
        pixel.winHeight = window.innerHeight;
    
        pixel.ulCnt = Math.ceil(pixel.winHeight/48);
        pixel.liCnt = Math.ceil(pixel.winWidth/48);
        pixel.ulCnt = pixel.ulCnt%2>0?pixel.ulCnt + 1:pixel.ulCnt;
        pixel.liCnt = pixel.liCnt%2>0?pixel.liCnt + 1:pixel.liCnt;
        pixel.ulHalf = pixel.ulCnt/2;
        pixel.liHalf = pixel.liCnt/2;

        pixel.wrapWidth = 48*pixel.liCnt;
        pixel.wrapHeight = 48*pixel.ulCnt;

        // console.log(pixel);

        // 너비가 클 때
        if(pixel.liCnt >= pixel.ulCnt) {
            $('#mouse-effect').removeClass('vertical');

            // 정상
            if(pixel.liCnt >= 14) {
                makeBack('horizontal')
            }
            // 너비가 좁을 때
            else {
                makeBack('horizontalError');
            }
        }
        // 높이가 클 때
        else {
            $('#mouse-effect').addClass('vertical');
            
            // 정상
            if(pixel.ulCnt >= 14) {
                makeBack('vertical')
            }
            // 높이가 낮을 때
            else {
                makeBack('verticalError');
            }
        }
    
        $('#mouse-effect').html(htmlText);

        const wrap = document.getElementById('mouse-effect');
        wrap.style.left = -(pixel.wrapWidth - pixel.winWidth)/2 + 'px';
        wrap.style.top = -(pixel.wrapHeight - pixel.winHeight)/2 + 'px';

        for(ul of wrap.children) {
            ul.style.width = pixel.wrapWidth + 'px';
        }
    }

    function makeBack(status) {
        switch (status) {
            case 'horizontal':
                htmlText = '';

                for(let r = 0 ; r < pixel.ulCnt ; r++) {
                    htmlText += '<ul data-row="' + r + '">';
            
                    for(let c = 0 ; c < pixel.liCnt ; c++) {
                        htmlText += '<li data-row="' + r + '" data-col="' + c + '"><div>';
                        if(r == pixel.ulHalf - 2) {
                            htmlText += copyrightH[c - (pixel.liHalf - 6)]?copyrightH[c - (pixel.liHalf - 6)]:'';
                        } else if(r == pixel.ulHalf - 1) {
                            htmlText += reservedH[c - (pixel.liHalf - 6)]?reservedH[c - (pixel.liHalf - 6)]:'';
                        }
                        htmlText += '</div></li>';
                    }
            
                    htmlText += '</ul>';
                }
                break;

            case 'horizontalError':
                htmlText = '';

                for(let r = 0 ; r < pixel.ulCnt ; r++) {
                    htmlText += '<ul data-row="' + r + '">';
            
                    for(let c = 0 ; c < pixel.liCnt ; c++) {
                        htmlText += '<li data-row="' + r + '" data-col="' + c + '"><div>';
                        if(r == pixel.ulHalf - 1) {
                            htmlText += horizontalError[c - (pixel.liHalf - 4)]?horizontalError[c - (pixel.liHalf - 4)]:'';
                        }
                        htmlText += '</div></li>';
                    }
            
                    htmlText += '</ul>';
                }
                break;
                
            case 'vertical':
                htmlText = '';

                for(let r = 0 ; r < pixel.ulCnt ; r++) {
                    htmlText += '<ul data-row="' + r + '">';
            
                    for(let c = 0 ; c < pixel.liCnt ; c++) {
                        htmlText += '<li data-row="' + r + '" data-col="' + c + '"><div>';
                        if(c == pixel.liHalf - 1) {
                            htmlText += copyrightV[r - (pixel.ulHalf - 6)]?copyrightV[r - (pixel.ulHalf - 6)]:'';
                        } else if(c == pixel.liHalf) {
                            htmlText += reservedV[r - (pixel.ulHalf - 6)]?reservedV[r - (pixel.ulHalf - 6)]:'';
                        }
                        htmlText += '</div></li>';
                    }
            
                    htmlText += '</ul>';
                }
                break;
                
            case 'verticalError':
                htmlText = '';

                for(let r = 0 ; r < pixel.ulCnt ; r++) {
                    htmlText += '<ul data-row="' + r + '">';
            
                    for(let c = 0 ; c < pixel.liCnt ; c++) {
                        htmlText += '<li data-row="' + r + '" data-col="' + c + '"><div>';
                        if(c == pixel.liHalf - 1) {
                            htmlText += verticalError1[r - (pixel.ulHalf - 2)]?verticalError1[r - (pixel.ulHalf - 2)]:'';
                        } else if(c == pixel.liHalf) {
                            htmlText += verticalError2[r - (pixel.ulHalf - 1)]?verticalError2[r - (pixel.ulHalf - 1)]:'';
                        }
                        htmlText += '</div></li>';
                    }
            
                    htmlText += '</ul>';
                }
                break;
        }
    }

    function mouseMove() {
        $(document).on('mouseenter','#mouse-effect > ul > li',function(){
            if(!effect) {
                let thisList = $(this);
                if(thisList.hasClass('trans')) {
                    thisList.addClass('stay');
                } else {
                    thisList.addClass('trans');
                }
                setTimeout(function(){
                    if(thisList.hasClass('stay')) {
                        thisList.removeClass('stay');
                    } else {
                        thisList.not('.ed').removeClass('trans');
                    }
                },1200);
            }
        })
    }

    function clickEffect() {
        $(document).on('click','#mouse-effect > ul > li',function(){
            if(!effect) {
                $('.trans').removeClass('trans stay ed');
                $(this).addClass('trans');

                let count = 0;
                effect = setInterval(function(){

                    $('.trans:not(.ed)').each(function(i,o){
                        $(this).addClass('ed');

                        $(this).next().addClass('trans').end()
                        .prev().addClass('trans');

                        $(this).parent().next().children().eq(this.dataset.col).addClass('trans');
                        $(this).parent().prev().children().eq(this.dataset.col).addClass('trans');
                    })
                    
                    if($('.trans:not(.ed)').length == 0) {
                        count++;

                        if(count > 10) {
                            clearInterval(effect);
                            $('#mouse-effect').remove();
                            pixel.status = false;

                            configButton();
                            spaceEffect();
                        }   
                    }
                },50)
            }
        })
    }

    /* ********************************************************* */

    function configButton() {
        const $spaceEffect = $('#space-effect'),
            configButton = '<button id="config-button" type="button"><div></div><div></div><div></div><div></div></button>';
        $spaceEffect.append(configButton);
        $('#config-button').animate({height:50},2000,function(){
            $(this).addClass('signal');
        });

        $(document).on('click','#config-button',function(){
            $spaceEffect.append('<aside id="config-box"></aside>');
            $('#config-box').stop().animate({height:200},1000,'linear');
        })
    }
    
    function spaceEffect() {
        typingEffect();
    }

    function typingEffect() {
        let spaceEffect = document.getElementById('space-effect'),
            word = spaceEffect.children[0].children,
            count = 0;

        const typing = setInterval(function(){
            let thisWord = word[count],
                character = thisWord.dataset.alphabet,
                ascii = character.charCodeAt();

            const randomTyping = setInterval(function(){
                let randomCode = Math.floor(Math.random()*26) + 65;
                thisWord.textContent = String.fromCharCode(randomCode);
                if(ascii == randomCode) clearInterval(randomTyping);
            },20)
            
            count++;
            if(count >= word.length) {
                clearInterval(typing);
                lineEffect();
            }
        },200);

        /* const typing = setInterval(function(){
            let thisWord = word[count],
                character = thisWord.dataset.alphabet,
                ascii = character.charCodeAt();

            let randomCode = Math.floor(Math.random()*26) + 65;
            thisWord.textContent = String.fromCharCode(randomCode);
            if(ascii == randomCode) {
                count++;
                if(count >= word.length) {
                    clearInterval(typing);
                    lineEffect();
                }
            }
        },30) */
    }

    const line = {
        topRight: {},
        rightBottom: {},
        bottomLeft: {},
        leftTop: {},
    }

    function titleResize() {
        pixel.winWidth = window.innerWidth;
        pixel.winHeight = window.innerHeight;

        if(pixel.winWidth >= pixel.winHeight) {
            $('#space-effect > h1').removeClass('portrait');
            
            line.leftTop.top = '-'+             '6vh';
            line.leftTop.left = '-'+       '8vw';
            line.leftTop.right =                      '29vw';
            line.leftTop.bottom =               '19vh';
                    
            line.rightBottom.top =                                           '26vh';
            line.rightBottom.left =                                    '37vw';
            line.rightBottom.right = '-'+                                          '4vw';
            line.rightBottom.bottom = '-'+                                   '2vh';
        } else {
            $('#space-effect > h1').addClass('portrait');
            
            line.leftTop.top = '-'+             '4vh';
            line.leftTop.left = '-'+       '5vw';
            line.leftTop.right =                      '20vw';
            line.leftTop.bottom =               '51vh';
                    
            line.rightBottom.top =                                           '61vh';
            line.rightBottom.left =                                    '17vw';
            line.rightBottom.right = '-'+                                         '4vw';
            line.rightBottom.bottom = '-'+                                   '7vh';
        }

        $('.left-top.vertical').css({
            top: line.leftTop.top,
            bottom: line.leftTop.bottom
        });
        $('.left-top.horizontal').css({
            right: line.leftTop.right,
            left: line.leftTop.left
        });
        $('.right-bottom.vertical').css({
            top: line.rightBottom.top,
            bottom: line.rightBottom.bottom
        });
        $('.right-bottom.horizontal').css({
            right: line.rightBottom.right,
            left: line.rightBottom.left
        });
    }

    function lineEffect() {
        $('#space-effect > h1').append('<div class="left-top vertical"></div><div class="left-top horizontal"></div><div class="right-bottom vertical"></div><div class="right-bottom horizontal"></div>');

        $('.left-top.vertical').animate({
            top: line.leftTop.top,
            bottom: line.leftTop.bottom
        },2500,function(){
            starEffect('vertical','bottom','top');
        });
        $('.left-top.horizontal').animate({
            right:line.leftTop.right,
            left:line.leftTop.left
        },4000,function(){
            starEffect('horizontal','right','left');
        });
        $('.right-bottom.vertical').animate({
            top:line.rightBottom.top,
            bottom:line.rightBottom.bottom
        },1500,function(){
            starEffect('vertical','top','bottom');
        });
        $('.right-bottom.horizontal').animate({
            right:line.rightBottom.right,
            left:line.rightBottom.left
        },3000,function(){
            starEffect('horizontal','left','right');
        });
    }

    const star = {
        top : {count:0},
        right : {count:0},
        bottom : {count:0},
        left : {count:0}
        // el: $('.star-right'),
        // direction: 'horizontal',
        // to: 'right',
        // location: '50vh',
        // length: '5vw',
        // narrow: '1px',
        // interval: 3000,
        // speed: 5000,
    };

    function starEffect(direction,from,to) {
        if(star[to].count > 9) star[to].count = 0;
        $('#space-effect').append('<div class="star-'+to+'-'+star[to].count+'"></div>');

        star[to].el = $('.star-' + to + '-' + star[to].count);
        star[to].direction = direction;
        star[to].from = from;
        star[to].to = to;
        star[to].location = Math.floor(Math.random()*990)/10;

        star[to].length = Math.floor(Math.random()*(config.star.length.max - config.star.length.min)) + config.star.length.min;
        star[to].opacity = Math.floor(Math.random()*(config.star.opacity.max - config.star.opacity.min)*100)/100 + config.star.opacity.min; 
        star[to].narrow = Math.floor(Math.random()*(config.star.narrow.max - config.star.narrow.min)) + config.star.narrow.min;
        star[to].interval = Math.floor(Math.random()*(config.star.interval.max - config.star.interval.min)) + config.star.interval.min;
        star[to].speed = Math.floor(Math.random()*(config.star.speed.max - config.star.speed.min)) + config.star.speed.min;

        let starStyle = star[to].el[0].style;
        starStyle[direction=='vertical'?'width':'height'] = star[to].narrow + 'px';
        starStyle[star[to].from] = direction=='vertical'?-(star[to].length)+'vh':-(star[to].length)+'vw';
        starStyle[star[to].to] = direction=='vertical'?'100vh':'100vw';
        starStyle[direction=='vertical'?'left':'top'] = direction=='vertical'?star[to].location+'vw':star[to].location+'vh';
        starStyle.opacity = star[to].opacity;

        let aniObj = {};
        aniObj[star[to].from] = starStyle[star[to].to];
        aniObj[star[to].to] = starStyle[star[to].from];

        star[to].count++;

        let timer = setTimeout(function(){
            star[to].el.animate(aniObj,star[to].speed,'linear',function(){
                clearTimeout(timer);
                $(this).remove();
            });
            starEffect(direction,from,to);
        },star[to].interval)
    }
}());