$(document).ready( function () {
    //hover over start button
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
    
    //hover over about button
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
    
    //hover over resume button
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
     
    //hover over credits button
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