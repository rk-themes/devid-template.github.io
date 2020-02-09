



! function($) {
    "use strict";
 var NAY = {};
    
    //*****************nav bar***********
    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
              console.log(scroll);

        if (scroll >= 70) {
            $(".sticky").addClass("nav-sticky");
        } else {
            $(".sticky").removeClass("nav-sticky");
        }
        
       if (scroll >= 450) {
            $(".progress-bar").addClass("progress_anm");
        } 
       
        
    });

    
    $(".navbar-nav").scrollspy({ offset: 70 });


    
    
    //******** tyer script************


var typed = new Typed('.type', {
          strings: ['Developer', 'a Designer','a writer'],
          typeSpeed: 100,
          backSpeed:100,
          loop:true
        });


    
    
    
//*****client-counter******

 $(' .count').counterUp({
        delay: 10,
        time: 2000
    });


//preloader

//	  ========================================================================== 
	
 $(window).on('load', function() {
       $("#preloader").delay(1000).addClass('loaded');
	
    });

//scrollTop

 $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    }); 

    $(".back-to-top").on("click", function() {
        $("html, body").animate({ scrollTop: 0 });
        return false;
    });


//  smooth scrolling  
   $(document).ready(function(){
      
       
       var scrollLink= $('.scroll');
    $(scrollLink).click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop:$(this.hash).offset().top - 50
        },1000)
    })
     
       //Active link
       
       $(window).scroll(function(){
           var scrollbarLocation=$(this).scrollTop();
           
           
           
           scrollLink.each(function(){
               var sectionoffset = $(this.hash).offset().top-67
               
               
               if(sectionoffset <= scrollbarLocation){
                   $(this).parent().addClass('active');
                   $(this).parent().siblings().removeClass('active');
                   
                   $('.progress-bar').addClass('progress_anm');
               }
               
              
                 
           })
           
           
          
       })
       
       
       
       
        
   })
    
     
    $('.toggler-menu').click(function(){
        $('.header-left').toggleClass('menu-open');

    })
    
    
   
    

}(jQuery) 







