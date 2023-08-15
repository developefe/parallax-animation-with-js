// Parallax Function
function doParallax(el, startVal, endVal) {
    var el = $(el),
        scrollVal,
        endVal = el.offset().top + el.outerHeight();

    $(window).on('scroll', function () {
        scrollVal = $(window).scrollTop();

        // If the scroll value is higher than the start value (which is where we want the animation to start)
        if (scrollVal > startVal && scrollVal < endVal) {
            el.css({'transform': 'translateY('+ (scrollVal/2) +'px)'});
        }
    });
}

doParallax('.img', $('.img').offset().top, $('.img').offset().bottom);