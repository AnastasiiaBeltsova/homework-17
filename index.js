jQuery(document).ready(function ($) {
    let currentImg;
    let clickedImg;
    $('.gallery .js--gal_item').click(function () {
        currentImg = $('.js--modal__content img').attr('src', $(this).find('img').attr('src'));
        $('.js--modal').fadeIn();
        clickedImg = $(this);
    })
    
    $('.js--modal__close').click(function () {
        $('.js--modal').fadeOut();
    })

    $('.js--modal__next').click(function () {
        currentImg.fadeOut(function () {
            clickedImg.next().trigger('click');
            currentImg.fadeIn(); 
        })
    })

    $('.js--modal__prev').click(function () {
        currentImg.fadeOut(function () {
            clickedImg.prev().trigger('click');
            currentImg.fadeIn();
        })
    })
})
