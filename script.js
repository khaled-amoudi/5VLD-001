$(document).ready(function(){


    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll > 90){
            $('.root-navbar .navbar').css({
                "background": "rgb(40, 4, 56, 0.99)"
                /*"background": "rgba(56, 9, 65,1)",
                "background": "linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(56, 9, 65,1) 100%)"*/
            });
        }
        else{
            $('.root-navbar .navbar').css({
                "background": "none"
            });
        }
    });
    /*******************************************************/
    /*******************************************************/

    $('.main ul li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });

    /*******************************************************/
    /*******************************************************/

    $(document).ready(function() {
        $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
            pager: false,
            slideMove: 2,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });  
    });

    /*******************************************************/
    /*******************************************************/

    $('.page .row div .box').hover(function(){
        $(this).find('.content').fadeTo(300, 0.19);
        // $(this).find('.hiden-content').fadeIn(300);
    },
    function(){
        $(this).find('.content').fadeTo(300, 1);
        // $(this).find('.hiden-content').fadeOut(300);
    });
    

    /*******************************************************/
    /*******************************************************/
    // Trigger Nice Scroll 
    $('html').niceScroll({
        cursorcolor: '#ba06e178',   /* change the color of cursor */
        cursorwidth: '10px',    /* change the width of cursor */
        cursorborder: '#ba06e178',   /* change the color of border of the cursor */
        cursorborderradius: '2px',   /* change the border radius of cursor */
        zindex: [9999]
    });
    
    $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
    })

});