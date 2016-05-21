$(document).ready( function () {
    
    var interactive = true;
    var animationsDisabled = false;
    
    //navbar hover
    $('#navbar li').mouseover( function () {
        $(this).animate({backgroundColor: "blue"}, 100);
    })
    
    $('#navbar li').mouseleave( function () {
        $(this).animate({backgroundColor: "navy"}, 100);
    })
    
    //decision hover 1
    $('#decision #desc1link a').mouseover( function () {
        if (interactive) {
            $("#interactive #desc1img").animate({opacity: 1}, 400);
        }
    })
    
    $('#decision #desc1link a').mouseleave( function () {
        if (interactive) {
            $("#interactive #desc1img").animate({opacity: 0}, 400);
        }
    })
    
    //decision hover 2
    $('#decision #desc2link a').mouseover( function () {
        if (interactive) {
            $("#interactive #desc2img").animate({opacity: 1}, 400);
        }
    })
    
    $('#decision #desc2link a').mouseleave( function () {
        if (interactive) {
            $("#interactive #desc2img").animate({opacity: 0}, 400);
        }
    })
    
    //customisation hover
    $('#accordion').mouseover( function () {
        $(this).animate({opacity: 1}, 100);
    })
    
    $('#accordion').mouseleave( function () {
        $(this).animate({opacity: 0.3}, 100);
    })
    
    //accessibility accordion
    $( "#accordion" ).accordion({
        collapsible: true,
        active: false,
        icons: false
        });
    
    //disable animations is clicked
    $('#accordion .ui-accordion-content #animationDisable').click( function () {
        disableAnimation();
    });
    
    //enable animations is clicked
    $('#accordion .ui-accordion-content #animationEnable').click( function () {
        enableAnimation();
    });
    
    //black theme is clicked
    $('#accordion .ui-accordion-content #blackTheme').click( function () {
        blackTheme();
    });
    
    //white theme is clicked
    $('#accordion .ui-accordion-content #whiteTheme').click( function () {
        whiteTheme();
    });
    
    //normal theme is clicked
    $('#accordion .ui-accordion-content #normalTheme').click( function () {
        normalTheme();
    });
    
    //larger text is clicked
    $('#accordion .ui-accordion-content #largerText').click( function () {
        largerText();
    });
    
    //normal text is clicked
    $('#accordion .ui-accordion-content #normalText').click( function () {
        normalText();
    });
    
    //run canvas generator
    var $canvas = $("#bubbleEffect");
    var numBubbles = 99;
    var bubbleArray = new Array(numBubbles);
    var maxRadius = 10;
    var minRadius = 2;
    var maxSpeed = 6;
    var minSpeed = 2;
    var colours = ["#3399FF", "#0000FF", "#99CCFF"];
    var height = $(window).height;
    var width = $(window).height;
    resize();
    generateBubbles();
    bubbleRender = setInterval(update,1000/60);
    
    //check for window change
    $(window).resize( function() {
	resize();
    });
    
    function disableAnimation() {
        window.clearTimeout(bubbleRender);
        interactive = false;
        animationsDisabled = true;
    }
    
    function blackTheme() {
        disableAnimation();
        //hide bubbles
        $("#bubbleEffect").css("opacity", "0");
        //set background to black
        $("body").css("background-image", "url()");
        $("body").css("background-color", "black");
        $("#content").css("background-image", "url()");
        $("#content").css("background-color", "#202020");
        $("#content").css("border-width", "0px");
        $("#content").css("border-style", "none");
        $("#content").css("color", "white");
        $("#decision a").css("color", "aqua");
        $("#story img").css("background-color", "transparent");
    }
    
    function whiteTheme() {
        disableAnimation();
        //hide bubbles
        $("#bubbleEffect").css("opacity", "0");
        //set background to black
        $("body").css("background-image", "url()");
        $("body").css("background-color", "white");
        $("#content").css("background-image", "url()");
        $("#content").css("background-color", "white");
        $("#content").css("border-color", "black");
        $("#content").css("border-width", "2px");
        $("#content").css("border-style", "solid");
        $("#content").css("color", "black");
        $("#decision a").css("color", "blue");
        $("#story img").css("background-color", "grey");
    }
    
    function normalTheme() {
        //display bubbles
        $("#bubbleEffect").css("opacity", "0.7");
        //set background to black
        $("body").css("background-image", 'url("/images/water.jpg")');
        $("body").css("background-color", "transparent");
        $("#content").css("background-image", 'url("/images/waterContent.jpg")');
        $("#content").css("background-color", "transparent");
        $("#content").css("border-color", "black");
        $("#content").css("border-width", "0px");
        $("#content").css("border-style", "none");
        $("#content").css("color", "white");
        $("#decision a").css("color", "aqua");
        $("#story img").css("background-color", "transparent");
        if (!animationsDisabled){
            animationsDisabled;
            enableAnimation();
        }
    }
    
    function largerText() {
        $("#content").css("font-size", "1.4em");
    }
    
    function normalText() {
        $("#content").css("font-size", "1em");
    }
    
    function enableAnimation() {
        if (animationsDisabled) {
            animationsDisabled = false;
            interactive = true;
            bubbleRender = setInterval(update,1000/60);
        }
    }
    
    
    function update() {
        move();
        render();
    }
    
    function resize() {
        height = $(window).height();
        width = $(window).width();
        var newCanvas = "<canvas id = 'seaCanvas' width = " + width + "px height = " + height +"px ></canvas>";
        $canvas.html(newCanvas);
        //wipe canvas
        var c = document.getElementById("seaCanvas");
        c.width = c.width;
        generateBubbles();
    }
    
    function generateBubbles() {
        //generate 99 random bubbles
        for(var i = 0; i < 99; i++) {
            //generate random radius
            var radius = Math.floor(Math.random()*(maxRadius-minRadius) + minRadius);
            var speed = Math.floor(Math.random()*(maxSpeed-minSpeed) + minSpeed);
            var colour = colours[Math.floor(Math.random() * colours.length)];
            var xPos = Math.floor(Math.floor(Math.random() * width));
            var yPos = Math.floor(Math.floor(Math.random() * height));
            //create bubble object
            var bubble = {
                radius: radius,
                speed: speed,
                colour: colour,
                xPos: xPos,
                yPos: yPos
            };
            bubbleArray[i] = bubble;
        }
    }    
    
    function move() {
        //loop through every bubble
        for (var i = 0; i < numBubbles; i++) {
            var currentBubble = bubbleArray[i];
            //change height
            currentBubble.yPos -= currentBubble.speed;
            //check for outside window
            if (currentBubble.yPos < -currentBubble.radius) {
                currentBubble.yPos = currentBubble.radius + height;
            }
        }
    }
    
    function render() {
        //wipe canvas
        var c = document.getElementById("seaCanvas");
        var ctx = c.getContext("2d"); 
        c.width = c.width;
        //loop through every bubble
        for (var i = 0; i < numBubbles; i++) {
            var currentBubble = bubbleArray[i];
            ctx.beginPath();
            ctx.arc(currentBubble.xPos,currentBubble.yPos,currentBubble.radius,0,2*Math.PI,false);
            ctx.fillStyle = currentBubble.colour;
            ctx.fill();
            ctx.closePath();
        }
    }
    
})