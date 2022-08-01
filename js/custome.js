$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $(".navbar").addClass("nav_bg");
    }else{
        $(".navbar").removeClass("nav_bg");
    }
});

$('.demo_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
  $('.team_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
  });
      