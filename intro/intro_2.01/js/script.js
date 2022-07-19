const pixel = {
    winWidth: 0,
    winHeight: 0,

    ulCnt: 0,
    liCnt: 0,
    ulHalf: 0,
    liHalf: 0,

    wrapWidth: 0,
    wrapHeight: 0,
};

const copyrightH = ['CO','PY','RI','GH','T&nbsp;&nbsp;&nbsp;','20','22','&nbsp;&nbsp;&nbsp;G','ON','GZ','ON','E&nbsp;&nbsp;&nbsp;'];
const reservedH = ['','AL','L&nbsp;&nbsp;&nbsp;','RI','GH','TS','&nbsp;&nbsp;&nbsp;R','ES','ER','VE','D&nbsp;&nbsp;&nbsp;',''];
const copyrightV = ['C<br>O','P<br>Y','R<br>I','G<br>H','T<br>','20<br>22','<br>G','O<br>N','G<br>Z','O<br>N','E<br>'];
const reservedV = ['A<br>L','L<br>','R<br>I','G<br>H','T<br>S','<br>R','E<br>S','E<br>R','V<br>E','D<br>',''];

const horizontalError = ['TO','O&nbsp;&nbsp;&nbsp;','SM','AL','L&nbsp;&nbsp;&nbsp;','SC','RE','EN'];
const verticalError1 = ['T<br>O','O<br>','S<br>M','A<br>L','L<br>'];
const verticalError2 = ['S<br>C','R<br>E','E<br>N'];
    
let htmlText = '';

(function(){
    $(document).ready(function(){
        mouseEffectBack();
        mouseMove();
        clickEffect();
    })

    $(window).resize(function(){
        mouseEffectBack();
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
                    thisList.removeClass('trans');
                }
            },1200);
        })
    }

    function clickEffect() {
        $(document).on('click','#mouse-effect > ul > li',function(){
            $(this).addClass('trans');

            let count = 0;
            let effect = setInterval(function(){

                $('.trans:not(.ed)').each(function(i,o){
                    $(this).addClass('ed');

                    $(this).next().addClass('trans').end()
                    .prev().addClass('trans');

                    $(this).parent().next().children().eq(this.dataset.col).addClass('trans');
                    $(this).parent().prev().children().eq(this.dataset.col).addClass('trans');
                })
                
                if($('.trans:not(.ed)').length == 0) {
                    count++;

                    if(count > 20) {
                        clearInterval(effect);
                        $('#mouse-effect').remove();
                    }
                }
            },50)
        })
    }
}());