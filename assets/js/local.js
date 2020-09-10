$(window).on('resize', function () {
});

$(document).ready(function () {

    $(window).trigger('resize');

    $('#main-nav').responsiveNav();

    if (Modernizr.touch) {
        $('#callouts .callout').click(function () {
            $(this).toggleClass('callout-open');
        });
    }

     // HP Video appender
     var mainVideo = $('#bgvid');
     if ($(window).width() < 768) {
     mainVideo.append("<source type='video/mp4' src='assets/video/welcome-small.mp4' />");
     } else {
     mainVideo.append("<source type='video/mp4' src='assets/video/welcome.mp4' />");
     }

// video parallax
    /*if (navigator.userAgent.match(/Trident\/7\./) || window.navigator.userAgent.indexOf("Edge") > -1) {
     } else {
     function paraSS() {
     window.addEventListener('scroll', function (event) {
     var depth, i, layer, layers, len, movement, topDistance, translateY;
     topDistance = this.pageYOffset;
     layers = document.querySelectorAll("[data-type='parallax']");
     for (i = 0, len = layers.length; i < len; i++) {
     layer = layers[i];
     depth = layer.getAttribute('data-depth');
     movement = -(topDistance * depth);
     if ($(window).width() < 1000) {
     movement = 0;
     }
     translateY = 'translateY(' + movement + 'px)';
     layer.style['-webkit-transform'] = translateY;
     layer.style['-moz-transform'] = translateY;
     layer.style['-ms-transform'] = translateY;
     layer.style['-o-transform'] = translateY;
     layer.style.transform = translateY;
     }
     });
     }

     paraSS();
     }*/
// end video parallax

    // HP Video appender
    /*
     // HP Video appender
     var mainVideo = $('#bgvid');
     if ($(window).width() < 768) {
     mainVideo.append("<source type='video/mp4' src='assets/video/welcome-small.mp4' />");
     } else {
     mainVideo.append("<source type='video/mp4' src='assets/video/welcome.mp4' />");
     }
     */

    // Add captions for before and after slides based on alt text
    //$('.before-and-after.slideshow div img:first-child').each(function() {
    // $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
    // });

    // Add captions for office tour slides based on alt text
    //$('.office-tour.slideshow div img:first-child').each(function() {
    // $(this).parent().append('<p class="caption">' + $(this).attr('alt') + '</p>');
    // });

//animate callouts
    $('.shift').hover(function () { //, #sidebar a
        $(this).animate({bottom: '3px'}, {queue: false, duration: 100});
    }, function () {
        $(this).animate({bottom: '0'}, {queue: false, duration: 400});
    });

    $('.linkHover').hover(function () {
        $(this).animate({opacity: '.65'}, 400);
    }, function () {
        $(this).animate({opacity: '1'}, 400);
    });

//Back to top hide and animate
    if ($('#bd').height() > $(window).height()) {
        $('#back-to-top').removeClass('hide');
        $('.back-to-top').removeClass('hide');
    }
    /* $('.back-to-top').removeClass('hide'); */
    $('#back-to-top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });
    $('a.back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

    /* obfuscate email */
    var $emailLinks = $('a.email');

    if ($emailLinks.length < 1) {
    } // skip this function if no objects found
    // Insert empty <a> tag with the following attributes:
    // * class="email"
    // * rel="example|domain.com" where pipe char '|' replaces '@'
    // * title="Email Us", this is the text shown after the email link is created by js
    $emailLinks.addClass('addicon').emailProt();

    // Open external links in new windows
    var domainName = window.location.hostname;
    $('a[href^="http://"], a[href^="https://"]')
        .not('a[href$=".doc"], a[href$=".pdf"], a[href*="' + domainName + '"]')
        .addClass('external').attr({target: '_blank', rel: 'noopener noreferrer'});


}); // end doc ready
