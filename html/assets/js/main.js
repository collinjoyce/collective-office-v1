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
    
        
});