/* Page Scroll
 * -------------------------------------------------- */

(function ( $ ) {

    "use strict";


    var slider = $('.scroll-slide'),
    home = $('#home'),
    animating = false,
    current = 0,
    lengthDiv = slider.length,
    delay = 1200;

    function doScroll(ind) {
        if(!animating) {
            animating = true;
            current = ind;
            home.removeClass().addClass('slide' + current);
            setTimeout(function () {
                animating = false;
            }, delay);
        }
    }

    $(document).keydown(function (e) {
        var key = e.keyCode;if (key == 38 || key == 40) e.preventDefault();
    });
    $(document).keyup(function (e) {
        if (!animating) {
            var key = e.keyCode;
            if (key == 38 && current > 0) {
                doScroll(current - 1);
            } else if (key == 40 && current < lengthDiv - 1) {
                doScroll(current + 1);
            }
        }
    });
    $(document).mousewheel(function (e, deltaY) {
        if (!animating) {
            if (deltaY > 0 && current > 0) {
                doScroll(current - 1);
            } else if (deltaY < 0 && current < lengthDiv - 1) {
                doScroll(current + 1);
            }
        }
        return false;
    });


 $(document).on('click', 'a.scroll-bottom[href^="#"]', function (event) {
     event.preventDefault();

     $('html, body').animate({
         scrollTop: $($.attr(this, 'href')).offset().top
     }, 1200);
 });

}( jQuery ));


   

        