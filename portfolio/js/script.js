$(document).ready(function(){
    $('.menu-animated').waypoint(function(){
        $('.menu-animated').addClass('animated pulse');
    },{
        offset: '10%;'
    });

    $('.js-main-header').waypoint(function(){
        $('.js-main-header').addClass('animated fadeInLeft');
    },{
        offset: '40%;'
    });

    $('.js-sub-header').waypoint(function(){
        $('.js-sub-header').addClass('animated fadeInRight');
    },{
        offset: '60%;'
    });

    $('.js-start-btn').waypoint(function(){
        $('.js-start-btn').addClass('animated fadeInUp');
    },{
        offset: '70%;'
    });

    $('.js-about-left').waypoint(function(){
        $('.js-about-left').addClass('animated fadeInLeft');
    },{
        offset: '50%;'
    });

    $('.js-about-right').waypoint(function(){
        $('.js-about-right').addClass('animated fadeInRight');
    },{
        offset: '60%;'
    });

    $('.js-animated-services').waypoint(function(){
        $('.js-animated-services').addClass('animated pulse');
    },{
        offset: '50%;'
    });
    $('.js-animated-portfolio').waypoint(function(){
        $('.js-animated-portfolio').addClass('animated fadeIn');
    },{
        offset: '20%;'
    });

    $('.contact-animated-left').waypoint(function(){
        $('.contact-animated-left').addClass('animated fadeInLeft');
    },{
        offset: '60%;'
    });

    $('.contact-animated-right').waypoint(function(){
        $('.contact-animated-right').addClass('animated fadeInRight');
    },{
        offset: '60%;'
    });
});