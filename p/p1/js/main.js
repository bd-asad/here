!function(t){"use strict";t("a.page-scroll").bind("click",function(a){var o=t(this);t("html, body").stop().animate({scrollTop:t(o.attr("href")).offset().top-50},1250,"easeInOutExpo"),a.preventDefault()}),t("body").scrollspy({target:".navbar-fixed-top",offset:100}),t(".navbar-collapse ul li a").click(function(){t(".navbar-toggle:visible").click()}),t("#mainNav").affix({offset:{top:50}})}(jQuery);



    $(document).ready(function() {
     
      var owl = $("#owl-demo");
     
      owl.owlCarousel({
      	
      	fadeSpeed : 5000,
      	rewindSpeed : 4000,
      	paginationSpeed : 300,
      	autoPlay : true,
      	autoPlay : 5000,
        navigation : false,
        pagination : false,
        singleItem : true,
        transitionStyle : "fade"
      });
     
    });

//for lsb
$(window).load(function() {
	$.fn.lightspeedBox();
});