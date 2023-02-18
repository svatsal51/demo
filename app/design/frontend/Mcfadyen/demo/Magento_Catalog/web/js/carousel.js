define([
    'jquery',
    'matchMedia',
    'slick'
], function($,slick) {
    'use strict';
    return function(config, element) {
        function isSlick(){
            if($(window).width() < 1024){
                $(element).not(".slick-initialized").slick(config);
            }else{
                if($(element).hasClass("slick-initialized")){
                    $(element).slick("unslick");
                }
            }
        }
        isSlick();

        $(window).resize(function(){
            isSlick();
        });
    };
});