$(document).ready(function () {
     new WOW().init();
   
    /*$(".menu").on("click", function(){
       
        $(".header ul").toggleClass("open wow fadeInUp");
        $(".header ul").toggleClass("nav");
    });*/
    
    $('.carousel[data-type="multi"] .item').each(function(){
        
       
  var next = $(this).next();
  if (!next.length) {
      
    next = $(this).siblings(':first');
     
  }
       
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<1;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
    
        $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
    
});