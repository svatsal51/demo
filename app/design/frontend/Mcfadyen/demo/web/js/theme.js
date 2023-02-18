define([
    "jquery",
    "gsap",
    "ScrollTrigger"
],function($,GreenSocks3, St){

    $(".block-search .block-title").on('click', function(){
        $(this).next().toggleClass('active').toggle();
    });

    $(window).scroll(function(){
        if ($(window).scrollTop() > 0) {
            $('.page-header').addClass('fixed-header');
            $('body').css('padding-top','69px');
        }
        else {
            $('.page-header').removeClass('fixed-header');
            $('body').css('padding-top','0');
        }
    });

    const gsap = GreenSocks3.gsap;
    const ScrollTrigger = St.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);


    ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function() {
            gsap.utils.toArray(".product-content-wrapper > div:not(.product.media)").forEach((panel, i) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top top+=69",
                    end: "bottom bottom",
                    pin: true,
                    scrub: 1
                });
            });
        }
    });
});