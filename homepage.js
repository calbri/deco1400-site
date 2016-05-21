$(document).ready( function () {
    $('#start').mouseover( function () {
        if (interactive) {
            $("#startImage").animate({opacity: 1}, 400);
        }
    })
    
    $('#start').mouseleave( function () {
        if (interactive) {
            $("#startImage").animate({opacity: 0}, 400);
        }
    })
    
    $('#about').mouseover( function () {
        if (interactive) {
            $("#aboutImage").animate({opacity: 1}, 400);
        }
    })
    
    $('#about').mouseleave( function () {
        if (interactive) {
            $("#aboutImage").animate({opacity: 0}, 400);
        }
    })
    
    $('#resume').mouseover( function () {
        if (interactive) {
            $("#resumeImage").animate({opacity: 1}, 400);
        }
    })
    
    $('#resume').mouseleave( function () {
        if (interactive) {
            $("#resumeImage").animate({opacity: 0}, 400);
        }
    })
     
    $('#credits').mouseover( function () {
        if (interactive) {
            $("#creditsImage").animate({opacity: 1}, 400);
        }
    })
    
    $('#credits').mouseleave( function () {
        if (interactive) {
            $("#creditsImage").animate({opacity: 0}, 400);
        }
    })
});