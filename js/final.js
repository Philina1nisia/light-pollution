window.addEventListener('scroll', function (event) {
    var depth, i, layer, layers, len, movement, topDistance, translate3d;
    topDistance = this.pageYOffset;
    layers = document.querySelectorAll("[data-type='parallax']");
    for (i = 0, len = layers.length; i < len; i++) {
        layer = layers[i];
        depth = layer.getAttribute('data-depth');
        movement = -(topDistance * depth);
        translate3d = 'translate3d(0, ' + movement + 'px, 0)';
        layer.style['-webkit-transform'] = translate3d;
        layer.style['-moz-transform'] = translate3d;
        layer.style['-ms-transform'] = translate3d;
        layer.style['-o-transform'] = translate3d;
        layer.style.transform = translate3d;
    }
});
$(document).ready(function () {
    var actualBottom = $(about2).offset().top + $(about2).outerHeight(true);
    $(window).scroll(function () {
        if ($(this).scrollTop() > actualBottom) {
            $('#menusmall').fadeIn(200);
        }
        else {
            $('#menusmall').fadeOut(200);
        }
    });
});
$(document).ready(function () {
    var rotation = 0;
    $(star2).click(function () {
        $('#star_menu').css({
            'transform': 'rotate(' + 10 + 'deg)'
        })
        $('#type1').addClass("animated fadeInRight slide")
        $('#type_head').css("visibility", "hidden")
        $('#type3').removeClass("animated fadeInRight slide");
        $('#type4').removeClass("animated fadeInRight slide");
        $('#type5').removeClass("animated fadeInRight slide");
        $('#type2').removeClass("animated fadeInRight slide");
//        
//        $('#type_head').css("visibility", "hidden");
//        $('#type2').css("visibility", "visible");
//        $('#type1').css("visibility", "hidden");
//        $('#type3').css("visibility", "hidden");
//        $('#type4').css("visibility", "hidden");
//        $('#type5').css("visibility", "hidden");
    });
   
       $(star_center).click(function () {
        $('#star_menu').css({
            'transform': 'rotate(' + 0 + 'deg)'
        })
        $('#type_head').css("visibility", "visible")
        $('#type3').removeClass("animated fadeInRight slide")
        $('#type4').removeClass("animated fadeInRight slide")
        $('#type5').removeClass("animated fadeInRight slide")
        $('#type1').removeClass("animated fadeInRight slide")
        $('#type2').removeClass("animated fadeInRight slide")

    }); 
    
    
    $(star3).click(function () {
        $('#star_menu').css({
            'transform': 'rotate(' + 300 + 'deg)'
        })
        $('#type2').addClass("animated fadeInRight slide")
        $('#type_head').css("visibility", "hidden")
        $('#type3').removeClass("animated fadeInRight slide");
        $('#type4').removeClass("animated fadeInRight slide");
        $('#type5').removeClass("animated fadeInRight slide");
        $('#type1').removeClass("animated fadeInRight slide");

    });
    $(star4).click(function () {
        $('#star_menu').css({
            'transform': 'rotate(' + 230 + 'deg)'
        })
          $('#type3').addClass("animated fadeInRight slide")
        $('#type_head').css("visibility", "hidden")
        $('#type1').removeClass("animated fadeInRight slide");
        $('#type4').removeClass("animated fadeInRight slide");
        $('#type5').removeClass("animated fadeInRight slide");
        $('#type2').removeClass("animated fadeInRight slide");
    });
    $(star5).click(function () {
        $('#star_menu').css({
            'transform': 'rotate(' + 150 + 'deg)'
        })
          $('#type4').addClass("animated fadeInRight slide")
        $('#type_head').css("visibility", "hidden")
        $('#type3').removeClass("animated fadeInRight slide");
        $('#type1').removeClass("animated fadeInRight slide");
        $('#type5').removeClass("animated fadeInRight slide");
        $('#type2').removeClass("animated fadeInRight slide");
    });
    $(star1).click(function () {
        $('#star_menu').css({
            'transform': 'rotate(' + 70 + 'deg)'
        })
          $('#type5').addClass("animated fadeInRight slide")
        $('#type_head').css("visibility", "hidden")
        $('#type3').removeClass("animated fadeInRight slide");
        $('#type4').removeClass("animated fadeInRight slide");
        $('#type1').removeClass("animated fadeInRight slide");
        $('#type2').removeClass("animated fadeInRight slide");
    });
});