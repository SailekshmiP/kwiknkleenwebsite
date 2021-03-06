//	ProBars v1.0, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	===============================================================================

function animateProgressBar() {
    jQuery('.pro-bar').each(function(i, elem) {
        var	elem = jQuery(this),
            percent = elem.attr('data-pro-bar-percent'),
            delay = elem.attr('data-pro-bar-delay');

        if (!elem.hasClass('animated'))
            elem.css({ 'width' : '0%' });

        if (elem.visible(true)) {
            setTimeout(function() {
                elem.animate({ 'width' : percent + '%' }, 2000, 'easeInOutExpo').addClass('animated');
            }, delay);
        } 
    });
}

jQuery(document).ready(function() {
    animateProgressBar();
});

jQuery(window).resize(function() {
    animateProgressBar();
});

jQuery(window).scroll(function() {
    animateProgressBar();

    if (jQuery(window).scrollTop() + jQuery(window).height() == jQuery(document).height())
        animateProgressBar();
});