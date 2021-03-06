/**
 * Isotope functions
 */

$(document).ready(function(){
    
    $('.works-container').isotope({
        itemSelector: '.works-item'
      });

// window resize and layout regenerate
        $(window).resize(function() {
           $('.works-container').isotope({
              itemSelector: '.works-item'
            });
        });
   

});




/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {


    $(window).load(function(){
    

        
        var $container = $('.works-container');

        $container.imagesLoaded( function(){
            $container.isotope({
              itemSelector: '.works-item'
            });
        });


        $('.works-filter li a').click(function(){
        $('.works-filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
              $('.works-container').isotope({ filter: selector });
              return false;
        });

        // window resize and layout regenerate
        $(window).resize(function() {
            $('.works-container').isotope({
              itemSelector: '.works-item'
            });
        });
   


    });

      
        
   
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends







  

