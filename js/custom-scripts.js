$(window).ready(function() {

    setTimeout(function() {
        $('.wrapper').animate({opacity: 1}, 500);
    }, 500);

    if ($(window).width() > 1023) {

        if ($(window).scrollTop() > 350) {
            $('header[role="banner"]').addClass('header-short');
        } else {
            $('header[role="banner"]').removeClass('header-short');
        }

    } else {
        $('header[role="banner"]').addClass('header-short');
    }

    $(window).resize(function() {

        if ($(window).width() > 1023) {

            if ($(window).scrollTop() > 350) {
                $('header[role="banner"]').addClass('header-short');
            } else {
                $('header[role="banner"]').removeClass('header-short');
            }

        } else {
            $('header[role="banner"]').addClass('header-short');
        }

    });

    $(window).on('scroll', function() {

        if ($(window).width() > 1023) {

            if ($(window).scrollTop > 350) {
                $('header[role="banner"]').addClass('header-short');
            } else {
                $('header[role="banner"]').removeClass('header-short');
            }

        } else {
            $('header[role="banner"]').addClass('header-short');
        }

    });

    $(document).click(function(event) {

        if (!$(event.target).closest(".custom-select").length) {
            $('.custom-select').removeClass('active');
        }

        if (!$(event.target).closest(".select-options").length) {
            $('.select-options').removeClass('active');
        }

    });

    $('nav a[href^="#"]').click(function () {

        if (!$(this).hasClass('active')) {

            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top - 50}, 800);
            $('nav .active').removeClass('active');
            $(this).addClass('active');

        }

        return false;
    });

    $('.custom-select .current-value').click(function() {

        if($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $('.custom-select').removeClass('active');
            $('.select-options').removeClass('active');
            $(this).parent().addClass('active');
        }

    });

    $('.select-city ul li').click(function() {

        if(!$(this).hasClass('active')) {

            var newCity = $(this).find('span').text();
            var newPhone = $(this).find('a').text();
            var newLink = $(this).find('a').attr('href');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            $(this).parents('.select-city').find('.current-value').text(newCity);
            $(this).parents('.select-city').siblings('.link-phone').find('a').text(newPhone);
            $(this).parents('.select-city').siblings('.link-phone').find('a').attr('href', newLink);

            $(this).parents('.select-city').removeClass('active');

        }

    });

    $('.callback').click(function() {
        $('.window').fadeIn();
    });

    $('.form-callback').click(function() {
        $('.window-form-callback').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }
        if ($target.hasClass('close-window')){
            $('.window').fadeOut();
        }
    });

    $('.to-questionnaire').click(function(){

        $('html, body').animate({scrollTop: $('.questionnaire').offset().top - 50}, 800);

        return false;
    });

});
