$(document).ready(function(){
    
    
    // Nav Toggle
    $('#overlay-toggle').click(function(){
        $('body').toggleClass('has-overlay');
        return false;
    });
    // …so clicking something that's not a link closes the nav
    function handler(event) {
        var target = $( event.target );
        if (target.is('a')) {
        } else {
            $('body').removeClass('has-overlay');
        }
    }
    $('.masthead').click(handler);
    
    
    // Hero Slider
    $("#slider").responsiveSlides({
        auto: true,
        speed: 750,
        timeout: 6000,
        pager: true,
        namespace: "slider"
    });
    
    
    // Filter Projects
    $('#projects-filter a').click(function(){
        $('#projects-filter a').removeClass('active');
        $(this).addClass('active');
        $('.projects .entry').hide();
        var type = $(this).attr('href').replace('#', '');
        if (type == "all") {
            $('.projects .entry').each(function(i) {
                $(this).fadeIn(200);
            });
        } else {
            $('.projects .entry.is-' + type).each(function(i) {
                $(this).fadeIn(200);
            });
        }
        return false;
    });
    
    
    // Fade Images
    var images = $('.section img');
    images.each(function(i, image) {
        var image = $(image);
        if (image.visible(true)) {
            image.addClass('is-visible'); 
        }
    });
    $(window).scroll(function(event) {
        images.each(function(i, image) {
            var image = $(image);
            if (image.visible(true)) {
                image.addClass('is-visible'); 
            }
        });
    });
    $('#projects-filter a').click(function(event) {
        images.each(function(i, image) {
            var image = $(image);
            if (image.visible(true)) {
                image.addClass('is-visible'); 
            }
        });
    });
    
        
});