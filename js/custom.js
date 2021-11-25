$(document).ready(function(){
    //arrowsbutton
    $('.banner-slider').slick({
        prevArrow: '<i class ="fas fa-chevron-left slick-prev left-arrow"></i>',
        nextArrow: '<i class ="fas fa-chevron-right slick-next right-arrow"></i>',
        arrows: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

   
    //scroll function
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 5){
            $('.back-to-top').fadeIn();
        }else{
            $('.back-to-top').fadeOut();
        }


        //addclass-removeclass
        if(scrolling > 4){
            $('nav').addClass('nav-fix');    
        }else{
            $('nav').removeClass('nav-fix');      
        }
    });
    
    //back to top
    $('.back-to-top').click(function(){
        $('html,body').animate({
            scrollTop: '0px' ,
        },1500);
    });

});


//toggle
$('.banner-menu').click(function(){
    $('.menu').toggle(1500);
});

//hide
$('.blog-item').click(function(){
    $('p').hide(1500);
});