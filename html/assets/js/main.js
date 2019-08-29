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
    
        
});