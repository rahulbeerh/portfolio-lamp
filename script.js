$(document).ready(function(){
    const btn = $('button.menu');
    const btnClose = $('.close-container');
    const mobileNavigation = $('.mobile-navigation');

    btn.on('click', function(){
        mobileNavigation.css('transform', 'translateX(0rem)');
    });

    btnClose.on('click', function(){
        mobileNavigation.css('transform', 'translateX(200rem)');
    });
});
