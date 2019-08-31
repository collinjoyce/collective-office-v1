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
    
        
});