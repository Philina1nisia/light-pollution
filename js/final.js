window.addEventListener('scroll', function(event) {
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

(function($) { 
    
    $(document).ready(function(){    
        var actualBottom = $(about2).offset().top + $(about2).outerHeight(true);
    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > actualBottom) {
                $('#menusmall').fadeIn(500);
            } else {
                $('#menusmall').fadeOut(500);
            }
        });
    });
})(jQuery);
//
//  $(document).ready(function(){
//
//    // hide .navbar first
//    $("#menusmall").hide();
//
//    // fade in .navbar
//    $(function () {
//        $(window).scroll(function () {
//
//                 // set distance user needs to scroll before we start fadeIn
//            if ($(this).scrollTop() > 100) {
//                $('#menusmall').fadeIn();
//            } else {
//                $('#menusmall').fadeOut();
//            }
//        });
//    });
//
//});



//
//$(function(){
//  $('#hero, .layer').css({ height: $(window).innerHeight() });
//  $(window).resize(function(){
//    $('#hero, .layer').css({ height: $(window).innerHeight() });
//  });
//});