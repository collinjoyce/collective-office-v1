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
    
    
    // Masthead Reveal on Scroll Up
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('#masthead').outerHeight();
    
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#masthead').removeClass('is-down').addClass('is-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#masthead').removeClass('is-up').addClass('is-down');
            }
        }
        
        lastScrollTop = st;
    }
    
    
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