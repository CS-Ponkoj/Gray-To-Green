$(function(){
    
    
    
    $('.back2top').click(function(){
        $('html,body').animate({scrollTop:0},1650);
    });
    
    
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        
        if(scrolling>400){
            $('.back2top').fadeIn(500);
        }
        
        else{
           $('.back2top').fadeOut(500); 
        }
        
    });
    
    
    
    
    
    var html_body = $('html, body');
    $('.menu a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 1500,);
                return false;
            }
        }
    });
    
    
    
    
    
    
    
    
    
});




